import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Trans } from 'react-i18next';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundaryInner extends Component<Props, State> {
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
          <h1 className="text-stone-900 text-2xl font-bold font-cabinet_grotesk">
            <Trans i18nKey="boundary.title" ns="errors">Something went wrong</Trans>
          </h1>
          <p className="text-stone-600 font-dm_sans">
            <Trans i18nKey="boundary.message" ns="errors">We couldn&apos;t load this page.</Trans>
          </p>
          <div className="flex gap-4">
            <Link to="/" className="text-blue-700 font-dm_sans font-semibold hover:underline">
              <Trans i18nKey="boundary.home" ns="errors">Home</Trans>
            </Link>
            <Link to="/projects" className="text-blue-700 font-dm_sans font-semibold hover:underline">
              <Trans i18nKey="boundary.projects" ns="errors">Projects</Trans>
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export { ErrorBoundaryInner as ErrorBoundary };
