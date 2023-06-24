import Home from "../components/Home";
import Layout from "../components/layout/Layout";

import { getRooms } from "../redux/actions/roomActions";
import { wrapper } from "../redux/store";

const HomePage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;

export const getServerSideProps = wrapper.getServerSideProps(() => {
  async ({ req, store }) => {
    await store.dispatch(getRooms(req));
  };
});
