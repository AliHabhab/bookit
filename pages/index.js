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

// Error: Error serializing `.initialState.allRooms.roomsCount` returned from `getServerSideProps` in "/".
// Reason: `undefined` cannot be serialized as JSON. Please use `null` or omit this value

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      await store.dispatch(getRooms(req));
    }
);
