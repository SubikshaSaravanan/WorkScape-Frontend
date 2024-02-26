import {configureStore} from "@reduxjs/toolkit";
import uploadModal from "./uploadModal";
import userId from "./userId";


export const uploadModalActions = uploadModal.actions;
export const userIdActions = userId.actions;

const store = configureStore({
    reducer:{
        modalActive:uploadModal.reducer,
        userId:userId.reducer,
    }
});


export default store;