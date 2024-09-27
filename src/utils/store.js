import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import commentSlice from "./CommentSlice";

const store= configureStore({
    reducer:{
       app: appSlice,
       search:searchSlice,
       chat:chatSlice,
       comments:commentSlice,
    }
});


export default store;