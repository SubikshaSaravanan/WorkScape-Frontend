import {createSlice} from "@reduxjs/toolkit";
const uploadModal = createSlice({
    name:"uploadModal",
    initialState:{
        active:false
    },
    reducers:{
        setActive(state){
            state.active = !state.active;
        }
    }
});


export default uploadModal;