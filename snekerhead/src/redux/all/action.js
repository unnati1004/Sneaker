import axios from "axios";

export const GET_ITEM_LOADING = "GET_ITEM_LOADING";
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILED = 'GET_ITEM_FAILED';


export const getitemloading=()=>({
    type:"GET_ITEM_LOADING",
})
export const getitemsuccess=(payload)=>({
   
        type:"GET_ITEM_SUCCESS",
        payload
})

export const getitemfailed=()=>({
    type:"GET_ITEM_FAILED",
})

export const getdata =()=>(dispatch)=>{
  dispatch(getitemloading())
  axios.get(" https://sneaker-1.herokuapp.com/sneaker").then(res=>dispatch(getitemsuccess(res.data))).catch(error=>dispatch(getitemfailed()))
}
export const filtermendata =()=>(dispatch)=>{
  dispatch(getitemloading())
  axios.get(" https://sneaker-1.herokuapp.com/sneaker?type=Men").then(res=>dispatch(getitemsuccess(res.data))).catch(error=>dispatch(getitemfailed()))
}
export const filterwomendata =()=>(dispatch)=>{
  dispatch(getitemloading())
  axios.get(" https://sneaker-1.herokuapp.com/sneaker?type=Women").then(res=>dispatch(getitemsuccess(res.data))).catch(error=>dispatch(getitemfailed()))
}
export const filterid =(id)=>(dispatch)=>{
  dispatch(getitemloading())
  axios.get(` https://sneaker-1.herokuapp.com/sneaker?id=${id}`).then(res=>dispatch(getitemsuccess(res.data))).catch(error=>dispatch(getitemfailed()))
}
export const filtercatN=(brand)=>(dispatch)=>{
  dispatch(getitemloading())
  axios.get(` https://sneaker-1.herokuapp.com/sneaker?brand=${brand}`).then(res=>dispatch(getitemsuccess(res.data))).catch(error=>dispatch(getitemfailed()))
}
export const filtertop=(cat)=>(dispatch)=>{
  dispatch(getitemloading())
  axios.get(` https://sneaker-1.herokuapp.com/sneaker?category=${cat}`).then(res=>dispatch(getitemsuccess(res.data))).catch(error=>dispatch(getitemfailed()))
}

// men filters
export const filtercatmen=(brand)=>(dispatch)=>{
  dispatch(getitemloading())
  axios.get(` https://sneaker-1.herokuapp.com/sneaker?type=Men&brand=${brand}`).then(res=>dispatch(getitemsuccess(res.data))).catch(error=>dispatch(getitemfailed()))
}
export const filtertopmen=(cat)=>(dispatch)=>{
  dispatch(getitemloading())
  axios.get(` https://sneaker-1.herokuapp.com/sneaker?type=Men&category=${cat}`).then(res=>dispatch(getitemsuccess(res.data))).catch(error=>dispatch(getitemfailed()))
}


///women filters
export const filtercatwomen=(brand)=>(dispatch)=>{
  dispatch(getitemloading())
  axios.get(` https://sneaker-1.herokuapp.com/sneaker?type=Women&brand=${brand}`).then(res=>dispatch(getitemsuccess(res.data))).catch(error=>dispatch(getitemfailed()))
}
export const filtertopwomen=(cat)=>(dispatch)=>{
  dispatch(getitemloading())
  axios.get(` https://sneaker-1.herokuapp.com/sneaker?type=Women&category=${cat}`).then(res=>dispatch(getitemsuccess(res.data))).catch(error=>dispatch(getitemfailed()))
}