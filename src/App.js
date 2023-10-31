import React from 'react';
import { ApolloProvider } from '@apollo/client';
import UserType from './Components/userType/userType';
import client from './graphql/apollo'; 

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






