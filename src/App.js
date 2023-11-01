import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/apollo';
import UserType from './Components/userType/userType';
import awsconfig from './config/aws-exports';
import { Amplify } from 'aws-amplify'

Amplify.configure(awsconfig);

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <UserType />
      </div>
    </ApolloProvider>
  );
}

export default App;