import { css } from '@emotion/react';

export const formWrapper = css`
  margin-top: 2rem;
`;

export const inputForm = css`
  margin: 1rem 0;
`;

export const formLabel = css`
  vertical-align: middle;
`;

export const taskTitleInput = css`
  width: 30%;
  padding: 0.35rem 0.5rem;
`;

export const submitBtn = css`
  padding: 0.5rem 1rem;
  background-color: #55c501;
  color: #ffffff;
  border-radius: 15px;
  border-style: solid;
  border-color: green;
  border-width: 0 5px 5px 0;

  :hover {
    border-width: 0 2px 2px 0;
    border-color: transparent;
    transform: translateY(4px);
  }
`;
