import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-neutral-100 px-6">
          <h1 className="text-stone-900 text-2xl font-bold font-cabinet_grotesk">Something went wrong</h1>
          <p className="text-stone-600 font-dm_sans">We couldn&apos;t load this page.</p>
          <div className="flex gap-4">
            <Link to="/" className="text-blue-700 font-dm_sans font-semibold hover:underline">Home</Link>
            <Link to="/projects" className="text-blue-700 font-dm_sans font-semibold hover:underline">Projects</Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
