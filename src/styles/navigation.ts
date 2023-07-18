import { css } from '@emotion/react';

export const navigationWrapper = css`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export const navigation = css`
  margin: 0 2rem;

  a {
    color: initial;
    text-decoration: none;
    font-weight: bold;

    &::after {
      content: '▶︎';
      padding-left: 0.5rem;
    }

    :hover,
    :active {
      color: pink;
    }
  }
`;
