/** @jsxImportSource @emotion/react */
import { pageTitle } from './styles/pageTitle';

type PropsType = {
  pageTitle: string;
};

const PageTitle = (props: PropsType) => {
  return <h2 css={pageTitle}>{props.pageTitle}</h2>;
};

export default PageTitle;
