/**
 * Nyota Frontend Error Logger
 * Automatically transmits client runtime exceptions and unhandled rejections
 * to the local Python error monitor server (http://localhost:8080).
 */

const ERROR_SERVER_URL = 'http://localhost:8080/api/errors';

export function initErrorMonitoring() {
  if (typeof window === 'undefined') return;

  // 1. Global unhandled JavaScript errors
  window.addEventListener('error', (event) => {
    const payload = {
      type: 'UncaughtError',
      message: event.message || 'Unknown error',
      source: event.filename || window.location.href,
      lineno: event.lineno,
      colno: event.colno,
      stack: event.error?.stack || null,
      url: window.location.href,
      userAgent: navigator.userAgent,
    };
    sendErrorToServer(payload);
  });

  // 2. Unhandled Promise Rejections (e.g., failed async calls, firebase network errors)
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    const payload = {
      type: 'UnhandledPromiseRejection',
      message: typeof reason === 'string' ? reason : reason?.message || 'Promise rejected without error message',
      code: reason?.code || null,
      stack: reason?.stack || null,
      url: window.location.href,
      userAgent: navigator.userAgent,
    };
    sendErrorToServer(payload);
  });

  // 3. Optional: Intercept console.error to capture logged library errors
  const originalConsoleError = console.error;
  console.error = (...args) => {
    try {
      const firstArg = args[0];
      // Only transmit meaningful error strings or Error instances
      if (firstArg && (typeof firstArg === 'string' || firstArg instanceof Error)) {
        const errorMsg = args.map(a => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ');
        // Avoid infinite loop if reporting itself
        if (!errorMsg.includes('localhost:8080')) {
          sendErrorToServer({
            type: 'ConsoleError',
            message: errorMsg.slice(0, 500),
            url: window.location.href,
          });
        }
      }
    } catch (e) {
      // Ignore logging failures
    }
    originalConsoleError.apply(console, args);
  };
}

function sendErrorToServer(payload) {
  try {
    fetch(ERROR_SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      mode: 'cors',
    }).catch(() => {
      // Silently ignore if Python monitor server is currently not running
    });
  } catch (err) {
    // Non-blocking
  }
}
