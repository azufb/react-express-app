import { DocumentNode, gql } from '@apollo/client';

export const GET_GREETING: DocumentNode = gql`
  query getGreeting {
    hello
    goodbye
  }
`;

export const ADD_TASK: DocumentNode = gql`
  mutation AddTask($title: String, $deadline: String) {
    addTask(title: $title, deadline: $deadline) {
      id
      title
      deadline
    }
  }
`;

export const GET_TASKS: DocumentNode = gql`
  query GetTasks {
    getTasks {
      id
      title
      deadline
    }
  }
`;

export const DELETE_TASK: DocumentNode = gql`
  mutation DeleteTask($id: Int) {
    deleteTask(id: $id) {
      id
      title
      deadline
    }
  }
`;

export const SEARCH_SAME_EMAIL_USER: DocumentNode = gql`
  mutation SearchSameEmailUser($email: String) {
    searchSameEmailUser(email: $email) {
      id
      name
    }
  }
`;

export const SIGNUP: DocumentNode = gql`
  mutation Signup($name: String, $email: String, $password: String) {
    signup(name: $name, email: $email, password: $password) {
      id
      name
    }
  }
`;

export const SIGNIN: DocumentNode = gql`
  mutation Signin($email: String, $password: String) {
    signin(email: $email, password: $password) {
      code
      message
    }
  }
`;
