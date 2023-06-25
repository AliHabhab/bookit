import { combineReducers } from "redux";
import { RoomDetailsReducer, allRoomsReducer } from "./roomReducers";
import { authReducer } from "./userReducers";

const reducer = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: RoomDetailsReducer,
  auth: authReducer,
});

export default reducer;
