import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const ChatSlice = createSlice({
    name:'Chat',
    initialState:[],
    reducers:{
        addChat:(state , action)=>{
            state.push(action.payload)
        },
        emptyChat:(sate)=>{
            return []
        }
    }
})
export const {addChat , emptyChat} = ChatSlice.actions
export default ChatSlice.reducer


