import { createSlice,createAsyncThunk,current } from "@reduxjs/toolkit";






const InfoSlice = createSlice({
    name:"Info",
    initialState:{
        data:[]
    },
    reducers:{
        addinfo:(state , action)=>{
            state.data.push(action.payload)
    
        },
        increselike:(state , action)=>{
        const filter =   current(state).data.map(item=> {
            if(item.id == action.payload)
            {
               if(item.likenumber >= 1){
                ++item.likenumber 
               }else{
                item.likenumber =1
               }

            }
            return item
        })
        return state

        },
        emptyinfo:(sate)=>{
            return []
        }
    }
    
})
export const {addinfo,emptyinfo,increselike} = InfoSlice.actions;
export default InfoSlice.reducer