import { css } from '@emotion/react';

export const listWrapper = css`
  margin-top: 2rem;
`;

export const table = css`
  width: 800px;
  border-collapse: collapse;
`;

export const thead = css`
  display: block;
  border-bottom: 2px solid black;
`;

export const idColumn = css`
  width: 100px;
`;

export const titleColumn = css`
  width: 300px;
`;

export const deadlineColumn = css`
  width: 250px;
`;

export const buttonColumn = css`
  width: 150px;
`;

export const tbody = css`
  display: block;
  max-height: 250px;
  overflow-y: scroll;
  border: 1px solid black;

  tr {
    display: block;
    padding: 0.5rem;
  }
`;

export const id = css`
  text-align: center;
  width: 100px;
`;

export const title = css`
  width: 300px;
`;

export const deadline = css`
  width: 250px;
`;

export const buttons = css`
  text-align: center;
  width: 150px;
`;

export const button = css`
  margin: 0.5rem;
`;
