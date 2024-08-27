'use client';

import { ApolloProvider } from '@parkease/network/src/config/apollo';
import { ReactNode } from 'react';

interface ApolloClientProviderProps {
  children: ReactNode;
}

const ApolloClientProvider = ({ children }: ApolloClientProviderProps) => {
  return <ApolloProvider>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
