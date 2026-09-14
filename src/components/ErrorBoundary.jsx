import React from 'react';
import { AlertCircle, RefreshCw, ArrowLeft } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Stream to local Python error monitor if available
    try {
      fetch('http://localhost:8080/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'ReactErrorBoundaryError',
          message: error?.message || 'Component Rendering Error',
          stack: error?.stack || null,
          componentStack: errorInfo?.componentStack || null,
          url: window.location.href,
        }),
      }).catch(() => {});
    } catch (e) {}
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (this.props.onReset) {
      this.props.onReset();
    } else {
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full glass-panel p-8 rounded-3xl border border-rose-500/30 bg-[#120D22] space-y-5 shadow-2xl">
            <div className="w-14 h-14 rounded-full mx-auto bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <AlertCircle className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="font-cinzel text-xl font-bold text-white">
                Something went wrong
              </h3>
              <p className="text-xs text-slate-300">
                {this.state.error?.message || 'An unexpected rendering error occurred in this view.'}
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-champagne-400 to-amber-500 text-slate-950 font-bold text-xs shadow-glow-gold hover:opacity-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reload View</span>
              </button>
              {this.props.fallbackAction && (
                <button
                  onClick={this.props.fallbackAction}
                  className="px-4 py-3 rounded-xl bg-white/10 text-slate-200 font-semibold text-xs hover:bg-white/15 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
