import { type PropsWithChildren } from "react";
import React from "react";
import styled from "styled-components";

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundaryProvider extends React.Component<PropsWithChildren, State> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryDiv>
          <p>{this.state.error!.toString()}</p>
        </ErrorBoundaryDiv>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryProvider;

const ErrorBoundaryDiv = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
