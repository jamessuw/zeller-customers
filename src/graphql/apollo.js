import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import awsconfig from '../config/aws-exports'; // Adjust the import path based on your folder structure

const httpLink = createHttpLink({
  uri: awsconfig.aws_appsync_graphqlEndpoint,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-api-key': awsconfig.aws_appsync_apiKey, // Adjust the header key based on your API requirements
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
