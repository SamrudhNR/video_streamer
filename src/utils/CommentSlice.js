import { createSlice } from "@reduxjs/toolkit";

const commentSlice =createSlice({
    name:"comments",
    initialState:{
        list:[],
    },
    reducers:{
        setComments:(state,action)=>{
            state.list= action.payload;
        }
    },
})

export const {setComments}=commentSlice.actions;
export default  commentSlice.reducer;