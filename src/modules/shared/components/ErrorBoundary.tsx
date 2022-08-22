import React, { ErrorInfo, PropsWithChildren } from 'react'

export interface ErrorBoundaryProps {
  onError: (error: Error, errorInfo: ErrorInfo) => void
  Fallback?: React.ReactElement
}

interface ErrorBoundaryState {
  error?: Error
}

export class ErrorBoundary extends React.Component<
  PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {}
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.onError(error, errorInfo)
  }

  render() {
    if (this.state.error) {
      return this.props.Fallback ?? null
    }

    return this.props.children
  }
}
