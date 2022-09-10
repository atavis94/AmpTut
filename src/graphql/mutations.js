/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserID = /* GraphQL */ `
  mutation CreateUserID(
    $input: CreateUserIDInput!
    $condition: ModelUserIDConditionInput
  ) {
    createUserID(input: $input, condition: $condition) {
      id
      username
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateUserID = /* GraphQL */ `
  mutation UpdateUserID(
    $input: UpdateUserIDInput!
    $condition: ModelUserIDConditionInput
  ) {
    updateUserID(input: $input, condition: $condition) {
      id
      username
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserID = /* GraphQL */ `
  mutation DeleteUserID(
    $input: DeleteUserIDInput!
    $condition: ModelUserIDConditionInput
  ) {
    deleteUserID(input: $input, condition: $condition) {
      id
      username
      image
      createdAt
      updatedAt
    }
  }
`;
