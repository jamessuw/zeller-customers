import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import UserType from './userType'; // Import your UserType component here
import { LIST_ZELLER_CUSTOMERS } from '../../graphql/queries';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

const mocks = [
  {
    request: {
      query: LIST_ZELLER_CUSTOMERS,
      variables: { userType: 'Manager' },
    },
    result: {
      data: {
        listZellerCustomers: {
          items: [
            {
              id: '2',
              name: 'Manager User 1',
              role: 'Manager',
            },
          ],
        },
      },
    },
  },
];

test('renders component and handles user type change', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UserType />
    </MockedProvider>
  );

  // Wait for the component to render initially
  await waitFor(() => {
    expect(screen.getByLabelText('Manager')).toBeInTheDocument();
  });

  // Simulate a user type change (selecting 'Manager' type)
  fireEvent.click(screen.getByLabelText('Manager'));

  // Wait for the component to update after the user type change
  await waitFor(() => {
    expect(screen.getByText(/Manager User 1/i)).toBeInTheDocument();
  });
});
