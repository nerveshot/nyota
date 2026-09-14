#!/usr/bin/env python3
"""
Nyota Error Monitoring Server
A lightweight Python HTTP server to capture, log, and view frontend runtime errors in real-time.
"""

import http.server
import socketserver
import json
import datetime
import sys

PORT = 8080
captured_errors = []

class ErrorMonitorHandler(http.server.BaseHTTPRequestHandler):
    def _set_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')

    def do_OPTIONS(self):
        self.send_response(204)
        self._set_cors_headers()
        self.end_headers()

    def do_POST(self):
        if self.path in ['/api/errors', '/log-error']:
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            
            try:
                error_payload = json.loads(post_data.decode('utf-8'))
            except Exception:
                error_payload = {'raw': post_data.decode('utf-8', errors='ignore')}

            timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            record = {
                'id': len(captured_errors) + 1,
                'timestamp': timestamp,
                'data': error_payload
            }
            captured_errors.append(record)

            # Limit in-memory store
            if len(captured_errors) > 500:
                captured_errors.pop(0)

            # Pretty Terminal Output
            err_msg = error_payload.get('message', error_payload.get('error', 'Unknown Error'))
            err_type = error_payload.get('type', 'RuntimeError')
            err_url = error_payload.get('url', error_payload.get('source', '-'))
            
            print(f"\033[91m[WEBSITE ERROR]\033[0m \033[90m[{timestamp}]\033[0m \033[93m{err_type}\033[0m: {err_msg}")
            if err_url and err_url != '-':
                print(f"  \033[94mLocation:\033[0m {err_url}")
            if 'stack' in error_payload and error_payload['stack']:
                print(f"  \033[90mStack:\033[0m {error_payload['stack'][:200]}...")
            sys.stdout.flush()

            self.send_response(200)
            self._set_cors_headers()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'logged', 'count': len(captured_errors)}).encode('utf-8'))
        else:
            self.send_response(404)
            self._set_cors_headers()
            self.end_headers()

    def do_GET(self):
        if self.path == '/api/errors':
            self.send_response(200)
            self._set_cors_headers()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(captured_errors, indent=2).encode('utf-8'))
            return

        if self.path == '/api/clear':
            captured_errors.clear()
            self.send_response(200)
            self._set_cors_headers()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'cleared'}).encode('utf-8'))
            return

        # Serve Live Error Dashboard
        html_dashboard = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nyota — Real-Time Error Monitor</title>
  <style>
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{
      background: #0B0914;
      color: #E2E8F0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      padding: 24px;
    }}
    .header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(212, 170, 100, 0.2);
      margin-bottom: 24px;
    }}
    h1 {{
      font-size: 22px;
      color: #FFF0C8;
      display: flex;
      align-items: center;
      gap: 10px;
    }}
    .badge {{
      background: rgba(212, 170, 100, 0.15);
      border: 1px solid rgba(212, 170, 100, 0.4);
      color: #D4AA64;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }}
    .status-pill {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(34, 197, 94, 0.15);
      border: 1px solid rgba(34, 197, 94, 0.3);
      color: #4ade80;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 13px;
    }}
    .pulse-dot {{
      width: 8px;
      height: 8px;
      background: #4ade80;
      border-radius: 50%;
      box-shadow: 0 0 8px #4ade80;
    }}
    .actions {{
      display: flex;
      gap: 12px;
      align-items: center;
    }}
    button {{
      background: #1E1838;
      color: #F8FAFC;
      border: 1px solid rgba(212, 170, 100, 0.3);
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 13px;
      transition: all 0.2s;
    }}
    button:hover {{
      background: #2D2354;
      border-color: #D4AA64;
    }}
    .btn-clear {{
      background: rgba(239, 68, 68, 0.15);
      border-color: rgba(239, 68, 68, 0.3);
      color: #f87171;
    }}
    .btn-clear:hover {{
      background: rgba(239, 68, 68, 0.3);
      border-color: #ef4444;
    }}
    .error-card {{
      background: #141026;
      border: 1px solid rgba(239, 68, 68, 0.25);
      border-left: 4px solid #ef4444;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 14px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }}
    .error-header {{
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      font-size: 12px;
      color: #94A3B8;
    }}
    .error-type {{
      font-weight: 700;
      color: #f87171;
      font-size: 14px;
    }}
    .error-msg {{
      font-size: 14px;
      color: #F1F5F9;
      margin-bottom: 10px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      background: rgba(0,0,0,0.4);
      padding: 8px 12px;
      border-radius: 6px;
      word-break: break-word;
    }}
    .error-meta {{
      font-size: 12px;
      color: #64748B;
      font-family: monospace;
      word-break: break-all;
    }}
    .empty-state {{
      text-align: center;
      padding: 80px 20px;
      color: #64748B;
      border: 1px dashed rgba(255, 255, 255, 0.1);
      border-radius: 16px;
    }}
    .empty-icon {{
      font-size: 48px;
      margin-bottom: 12px;
    }}
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1>✨ Nyota Error Monitor <span class="badge">Port {PORT}</span></h1>
      <p style="font-size: 13px; color: #94A3B8; margin-top: 4px;">Live real-time telemetry from your frontend application</p>
    </div>
    <div class="actions">
      <div class="status-pill">
        <div class="pulse-dot"></div>
        <span>Listening for Errors</span>
      </div>
      <button onclick="fetchErrors()">🔄 Refresh</button>
      <button class="btn-clear" onclick="clearErrors()">🗑️ Clear Logs</button>
    </div>
  </div>

  <div id="error-list">
    <div class="empty-state">
      <div class="empty-icon">🛡️</div>
      <h3>No Errors Captured Yet</h3>
      <p style="font-size: 13px; margin-top: 6px;">Any runtime errors, promise rejections, or console errors will appear here live.</p>
    </div>
  </div>

  <script>
    async function fetchErrors() {{
      try {{
        const res = await fetch('/api/errors');
        const errors = await res.json();
        renderErrors(errors);
      }} catch (err) {{
        console.error('Fetch error:', err);
      }}
    }}

    async function clearErrors() {{
      try {{
        await fetch('/api/clear');
        fetchErrors();
      }} catch (err) {{
        console.error('Clear error:', err);
      }}
    }}

    function renderErrors(errors) {{
      const container = document.getElementById('error-list');
      if (!errors || errors.length === 0) {{
        container.innerHTML = `
          <div class="empty-state">
            <div class="empty-icon">🛡️</div>
            <h3>No Errors Captured Yet</h3>
            <p style="font-size: 13px; margin-top: 6px;">Any runtime errors, promise rejections, or console errors will appear here live.</p>
          </div>
        `;
        return;
      }}

      container.innerHTML = errors.slice().reverse().map(err => {{
        const d = err.data || {{}};
        const msg = d.message || d.error || JSON.stringify(d);
        const type = d.type || 'RuntimeError';
        const stack = d.stack ? `<details style="margin-top: 8px;"><summary style="cursor: pointer; color: #94A3B8; font-size: 12px;">View Stack Trace</summary><pre style="background: rgba(0,0,0,0.5); padding: 8px; border-radius: 6px; font-size: 11px; margin-top: 6px; overflow-x: auto; color: #CBD5E1;">${{escapeHtml(d.stack)}}</pre></details>` : '';
        const url = d.url || d.source ? `<div><strong>Source:</strong> ${{escapeHtml(d.url || d.source)}}</div>` : '';
        const line = (d.lineno || d.colno) ? `<div><strong>Position:</strong> Line ${{d.lineno || '?'}}, Col ${{d.colno || '?'}}</div>` : '';

        return `
          <div class="error-card">
            <div class="error-header">
              <span class="error-type">${{escapeHtml(type)}}</span>
              <span>#${{err.id}} • ${{err.timestamp}}</span>
            </div>
            <div class="error-msg">${{escapeHtml(msg)}}</div>
            <div class="error-meta">
              ${{url}}
              ${{line}}
            </div>
            ${{stack}}
          </div>
        `;
      }}).join('');
    }}

    function escapeHtml(str) {{
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }}

    // Auto-poll every 2 seconds
    fetchErrors();
    setInterval(fetchErrors, 2000);
  </script>
</body>
</html>
"""
        self.send_response(200)
        self._set_cors_headers()
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        self.end_headers()
        self.wfile.write(html_dashboard.encode('utf-8'))

def run_server():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), ErrorMonitorHandler) as httpd:
        print(f"\n=======================================================")
        print(f"✨ Nyota Error Monitoring Server Running")
        print(f"📊 Dashboard URL: http://localhost:{PORT}")
        print(f"📡 Ingestion API: http://localhost:{PORT}/api/errors")
        print(f"=======================================================\n")
        sys.stdout.flush()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down monitor server...")
            httpd.server_close()

if __name__ == '__main__':
    run_server()
