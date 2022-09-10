/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserID = /* GraphQL */ `
  query GetUserID($id: ID!) {
    getUserID(id: $id) {
      id
      username
      image
      createdAt
      updatedAt
    }
  }
`;
export const listUserIDS = /* GraphQL */ `
  query ListUserIDS(
    $filter: ModelUserIDFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserIDS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
