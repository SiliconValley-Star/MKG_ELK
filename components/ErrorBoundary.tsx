import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
          <div className="max-w-md w-full text-center">
            <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-red-500/10 rounded-full border border-red-500/20">
              <AlertTriangle className="text-red-500" size={40} />
            </div>
            
            <h1 className="text-3xl font-display font-bold text-white mb-4">
              Bir Hata Oluştu
            </h1>
            
            <p className="text-slate-400 mb-8 leading-relaxed">
              Üzgünüz, beklenmeyen bir sorun oluştu. Lütfen sayfayı yenileyin veya ana sayfaya dönün.
            </p>

            {this.state.error && (
              <div className="mb-8 p-4 bg-slate-900 border border-slate-800 rounded-lg text-left">
                <p className="text-xs font-mono text-red-400 break-all">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                <RefreshCw size={18} />
                Tekrar Dene
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 font-bold rounded-lg hover:bg-white hover:text-black hover:border-white transition-colors"
              >
                <Home size={18} />
                Ana Sayfa
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;