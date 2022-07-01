import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate, useParams } from "react-router"
import { filterid } from "../redux/all/action";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
export const ShoeDetail=()=>{
    const navigate=useNavigate()
    const[data , setdata]=useState({})
    const [size, setsize] = useState('');
    let {id}=useParams()
  
    let x;
    let product;
    const dispatch=useDispatch();
    const handlesize = (event) => {
        setsize(event.target.value);
        };
    useEffect(()=>{
        dispatch(filterid(id))
    },[product]) ;
     product=useSelector((state)=>state.item.items);
    

    
     const handlepost=()=>{
         let payload={
             name:product[0].name,
             price:product[0].price,
             image:product[0].image,
             size:size
         };

        axios.post('http://localhost:3001/cart',payload).then((res)=>{
         
        })
        navigate('/cart')
     }

    return(
        <>
       {product[0] &&  <div className="maindiv">
            <div>
            <img src={product[0].image} style={{width:"100%"}}></img>
            </div>
            <div>
            <h3>{product[0].brand}</h3>
            <h1>{product[0].name}</h1>
            <h2>{product[0].category}</h2>
            <h2>₹{product[0].price}/-</h2>
            <p>{product[0].description}</p>
            <p>{product[0].type}</p>
            <div className="sizeselect">
            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Age"
          onChange={handlesize}
        >
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
    </Box>
            </div>
            <button disabled={size==""} onClick={()=>handlepost()} className="addcart">ADD CART</button>
            </div>
        </div> 
}
       
        </>
    )
}