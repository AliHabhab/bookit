import { combineReducers } from "redux";
import { RoomDetailsReducer, allRoomsReducer } from "./roomReducers";

const reducer = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: RoomDetailsReducer,
});

export default reducer;
