import 'react-native-gesture-handler';
import React from 'react';
import {
  ApolloClient, ApolloProvider, HttpLink, InMemoryCache,
} from '@apollo/client';
import AppContainer from './AppContainer';

const API_URL = 'http://192.168.43.157:4000/graphql';

const httpLink = new HttpLink({
  uri: API_URL,
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  );
}
