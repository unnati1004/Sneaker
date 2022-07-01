import {GET_ITEM_SUCCESS,GET_ITEM_FAILED,GET_ITEM_LOADING} from "./action";

const initialstate={
    loading: false,
    items:[],
    failed: false,
};

export const item_reducer =(store=initialstate,{type,payload})=>{
    switch(type){
        case GET_ITEM_LOADING:
            return{...store,loading:true};
        case GET_ITEM_SUCCESS:
            return{...store,loading:false,failed:false,success:true,items:[...payload]};

        case GET_ITEM_FAILED:
             return{...store,failed:true};
       
        default:
            return store;
    }
}