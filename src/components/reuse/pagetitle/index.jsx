import Helmet from "react-helmet";

const PageTitle = ({ page_name, title }) => {
  return (
    <Helmet>
      <title>
        {page_name} | {title}
      </title>
    </Helmet>
  );
};

export default PageTitle;
