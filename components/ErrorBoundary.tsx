import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
    window.location.href = '/#/';
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
          <div className="max-w-2xl w-full">
            <div className="bg-slate-900/60 backdrop-blur-xl border border-red-900/50 rounded-3xl p-8 md:p-12">
              {/* Icon */}
              <div className="w-20 h-20 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center justify-center text-red-500 mx-auto mb-6">
                <AlertTriangle size={40} />
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-4">
                Bir Hata Oluştu
              </h1>

              {/* Description */}
              <p className="text-slate-400 text-center mb-8">
                Üzgünüz, beklenmeyen bir hata oluştu. Teknik ekibimiz bilgilendirildi.
                Lütfen sayfayı yenilemeyi veya ana sayfaya dönmeyi deneyin.
              </p>

              {/* Error Details (only in development) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 mb-6 text-left">
                  <p className="text-red-400 font-mono text-sm mb-2">
                    {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <pre className="text-slate-500 font-mono text-xs overflow-auto max-h-40">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleReload}
                  className="px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-brand-orange transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCw size={18} />
                  Sayfayı Yenile
                </button>
                <button
                  onClick={this.handleReset}
                  className="px-6 py-3 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Home size={18} />
                  Ana Sayfaya Dön
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;