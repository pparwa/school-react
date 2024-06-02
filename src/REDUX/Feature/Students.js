import { createSlice ,createAsyncThunk, configureStore } from "@reduxjs/toolkit";



const PersonSlice = createSlice(
    {
        name:"student",
         initialState:{
            id:"",
            name:"",
            lastname:"",
            grade:"",
            role:""
         },
         reducers:{
            SetRole:(state , action)=>{
              return {
                ...state,role:action.payload
              }
           
            },
            SetPerson:(state , action)=>{
            return {...state,id:action.payload.id,
            name:action.payload.name,
            lastname:action.payload.lastname,
             grade:action.payload.grade}

            }
        
         }

        
    }
)

export const {SetRole , SetPerson} = PersonSlice.actions;
export default PersonSlice.reducer