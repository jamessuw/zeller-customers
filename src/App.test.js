// App.test.js or App.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';
import { LIST_ZELLER_CUSTOMERS } from '../../graphql/queries';



const mocks = [
  {
    request: {
      query: LIST_ZELLER_CUSTOMERS,
    },
    result: {
      data: {
        listZellerCustomers: {
          items: [
            // Provide mock data here as needed for your test cases
          ],
        },
      },
    },
  },
];

test('renders learn react link', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  // Wait for the component to render the expected content
  await waitFor(() => {
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
  });
});
