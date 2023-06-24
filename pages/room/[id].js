import RoomDetails from "../../components/room/RoomDetails";
import Layout from "../../components/layout/Layout";

import { getRoomDetails } from "../../redux/actions/roomActions";
import { wrapper } from "../../redux/store";

const RoomDetailsPage = () => {
  return (
    <Layout>
      <RoomDetails title="Room Details" />
    </Layout>
  );
};

export default RoomDetailsPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      await store.dispatch(getRoomDetails(req, params.id));
    }
);

// export const getServerSideProps = wrapper.getServerSideProps(() => {
//   async ({ req, params, store }) => {
//     console.log("test!");
//     await store.dispatch(getRoomDetails(req, params.id));
//   };
// });
