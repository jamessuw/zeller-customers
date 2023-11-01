import { gql } from '@apollo/client';

export const LIST_ZELLER_CUSTOMERS = gql`
  query ListZellerCustomers($userType: String!) {
    listZellerCustomers(filter: { role: { eq: $userType } }) {
      items {
        email
        id
        name
        role
      }
    }
  }
`;