import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filtercatmen, filtercatN, filtermendata, filtertop, filtertopmen } from "../redux/all/action"
import { store } from "../redux/store"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Link} from "react-router-dom"
export const Men = () =>{
    const [data,setdata]=React.useState([])
    const [price, setPrice] = React.useState('');
    const [brand, setbrand] = React.useState('');
    const [rate, setRate] = React.useState('');
   const handleChangeprice = (event) => {
    setPrice(event.target.value);
    if(event.target.value==10){
        let x=product.sort((a,b)=>{ 
            return b.price-a.price
        })
        setdata([...x])
    }
    if(event.target.value==20){
        let x=product.sort((a,b)=>{ 
            return a.price-b.price
        })
        setdata([...x])
    }
   
  };
  const handleChangebrand = (event) => {
    setbrand(event.target.value);
    dispatch(filtercatmen(event.target.value))
  };
  const handleChangerate = (event) => {
    setRate(event.target.value);
    dispatch(filtertopmen(event.target.value))
  };
    const dispatch=useDispatch();
   useEffect(()=>{
    dispatch(filtermendata())
   },[]) 
   
   const product =useSelector(state=>state.item.items);
   
 
    
return(
        <>
        <h1 style={{textAlign:"center",color:"black",fontSize:"30px",fontWeight:"700"}}>Men</h1>
        <div className="sortdiv">
        <div>
        <div className="schild">
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by Price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={price}
          label="Age"
          onChange={handleChangeprice}
        >
          <MenuItem  value={10}>High to low</MenuItem>
          <MenuItem value={20}>Low to high</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        </div>
        <div>
        <div className="schild">
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter By Brand</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={brand}
          label="Age"
          onChange={handleChangebrand}
        >
          <MenuItem value={"Nike"} >Nike</MenuItem>
          <MenuItem value={"Adidas"}>Adidas</MenuItem>
          <MenuItem value={"Puma"} >Puma</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        </div>
        <div className="schild">
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rate}
          label="Age"
          onChange={handleChangerate}
        >
          <MenuItem value={"Hightop"}>Hightop</MenuItem>
          <MenuItem value={"Lowtop"}>Lowtop</MenuItem>
          <MenuItem value={"Midtop"}>Midtop</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        </div>
       <div className="all_shoe">
       {product.map((e)=>
       <Link to={`/shoedetail/${e.id}`}><div className="childdiv" key={e.id}>
           <div className="imgdiv">
           <img src={e.image}></img>
           </div>
           <h3>{e.brand}</h3>
           <h2>{e.name}</h2>
           <p>₹{e.price}/-</p>
         </div></Link>
       )}
       </div>
        </>
    )
}