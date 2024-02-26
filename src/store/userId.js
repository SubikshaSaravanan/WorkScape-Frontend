import {createSlice} from "@reduxjs/toolkit";


const userId = createSlice({

    name:"userId",
    initialState:{
        uid:"",
        isAuth:false,
    },
    reducers:{
        setUser(state,action){
            state.uid = action.payload;
            state.isAuth = true;
        }
    }
});


export default userId;