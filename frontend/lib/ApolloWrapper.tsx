'use client';

import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import { client } from './apolloClient';

export default function ApolloWrapper({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
// This component wraps the ApolloProvider around the children components.
