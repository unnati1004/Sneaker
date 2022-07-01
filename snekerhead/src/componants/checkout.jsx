import { useParams } from "react-router"
import { Cart } from "./cart"
import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
export const Checkout = () =>{
    const [mobile,setmobile]=useState("")
    const [name,setname]=useState("")
    const [state,setstate]=useState("")
    const [address,setaddress]=useState("")
    const [pin,setpin]=useState("")
    const navigate=useNavigate()
    const[data,setdata]=useState([]);
    useEffect(()=>{
       getdata()
    },[])
    const getdata=()=>{
      axios.get('http://localhost:3001/cart').then((res)=>{
          setdata(res.data)
          console.log(res.data)
      })
    }
     let sum=0;
    data.map((e)=>{
        sum=sum+e.price
    })
    let GST=Math.round(sum*0.18);
    

    const handlesub=()=>{
     if(mobile.length!==10){
         alert("Enter Valid mobile number")
     }
     if(name.length===0){
       alert("Enter name")
     }
     if(state.length===0){
       alert("Fill  state")
     }
     if(address.length===0){
         alert("Fill the Address")
     }
     if(pin.length!==6){
         alert('Enter Valid pin')
     }
     else{
         navigate('/payment')
     }
    }
    return(
        <>
        <h1 className="heading">Checkout Page</h1>
         <div className="checkmain">
          <div className="formdiv">
          <label>Full Name*</label><br></br>
          <input onChange={(e)=>setname(e.target.value)} type="text" placeholder="Enter Your Name"></input><br></br>
          <label>State*</label><br></br>
          <input onChange={(e)=>setstate(e.target.value)} type="text" placeholder="Enter Your State"></input><br></br>
          <label>Address Line 1*</label><br></br>
          <input onChange={(e)=>setaddress(e.target.value)}  type="text" placeholder="Enter Your Address Line 1"></input><br></br>
          <label>Address Line 2</label><br></br>
          <input type="text" placeholder="Enter Your Address Line 2"></input><br></br>
          <label>Mobile*</label><br></br>
          <input onChange={(e)=>setmobile(e.target.value)} type="text" placeholder="Enter 10 Digit Valid Mobile Number "></input><br></br>
          <label>Pincode*</label><br></br>

          <input onChange={(e)=>setpin(e.target.value)} type="text" placeholder="Enter Pincode"></input><br></br>
          
          </div>
         <div className="ordersum">
          <h1>Order Summary</h1>
          <p>Details</p>
          {data.map((e)=><div key={e.id}>
          <p>{e.name}&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;₹{e.price}/-</p>
          </div>)}
          <hr></hr>
          <p>Subtotal:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;₹{sum}/-</p>
          <p>Tax:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;₹{GST}/-</p>
          <hr></hr>
          <h1>Total Bill</h1>
          <h1 style={{fontSize:"20px"}}>₹{sum+GST}/-</h1>
          <button onClick={handlesub}>PAYMENT</button>
           </div>
         </div>
        </>
    )
}