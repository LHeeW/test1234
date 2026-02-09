"use client";

import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface Props {
  children: React.ReactNode;
  loadingFallback?: React.ReactNode;
  errorFallback?: (props: {
    error: Error;
    resetErrorBoundary: () => void;
  }) => React.ReactNode;
}

export const QueryBoundary = ({
  children,
  loadingFallback,
  errorFallback,
}: Props) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={(props) => {
            const error = props.error as Error;
            const resetErrorBoundary = props.resetErrorBoundary;

            if (errorFallback) {
              return errorFallback({ error, resetErrorBoundary });
            }

            return (
              <button type="button" onClick={() => resetErrorBoundary()}>
                다시 시도
              </button>
            );
          }}
        >
          <Suspense fallback={loadingFallback || <div>Loading...</div>}>
            {children}
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};
