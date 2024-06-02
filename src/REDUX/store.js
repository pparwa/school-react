import { configureStore } from "@reduxjs/toolkit";
import InfoReducer from "./Feature/Info";
import PersonReducer from "./Feature/Students"
import UserReducer from "./Feature/User"
import ChatReducer from "./Feature/Chat"

const store = configureStore(
    {
        reducer:{
            infos:InfoReducer,
            Persons:PersonReducer,
            User:UserReducer,
            Chat:ChatReducer
        }
    }
)
export default store;