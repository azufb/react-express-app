/** @jsxImportSource @emotion/react */

import { layoutWrapper } from './styles/layout';

const Layout = ({ children }: { children: any }) => {
  return <div css={layoutWrapper}>{children}</div>;
};

export default Layout;
