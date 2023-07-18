type PropsType = {
  pageTitle: string;
};

const PageTitle = (props: PropsType) => {
  return <h2>{props.pageTitle}</h2>;
};

export default PageTitle;
