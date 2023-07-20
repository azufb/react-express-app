import { DocumentNode, gql } from '@apollo/client';

export const GET_HELLO_WORLD: DocumentNode = gql`
  query getHelloWOrld {
    helloWorld
  }
`;

export const GET_RANDOM_GREETING: DocumentNode = gql`
  query getRandomGreeting {
    greeting
  }
`;

export const GET_GREETING: DocumentNode = gql`
  query getGreeting($name: String) {
    hello(name: $name)
    goodbye(name: $name)
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

export const UPDATE_TASK: DocumentNode = gql`
  mutation UpdateTask($id: Int, $title: String, $deadline: String) {
    updateTask(id: $id, title: $title, deadline: $deadline) {
      id
      title
      deadline
    }
  }
`;
