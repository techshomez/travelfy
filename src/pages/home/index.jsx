import Header from "../../components/common/header";
import Popular from "../../components/home/popular";
import PageTitle from "../../components/reuse/pagetitle";

const Home = () => {
  return (
    <>
      <PageTitle page_name="TravelFy" title="Home" />
      <Header />
      <Popular />
    </>
  );
};

export default Home;
