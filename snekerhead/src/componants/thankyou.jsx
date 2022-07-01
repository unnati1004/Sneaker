import { useNavigate } from "react-router"

export const  Thankyou=()=>{
  const navigate=useNavigate()
    return (
      <div className="thankyou" >
      <h1 style={{fontFamily:"'Brush Script MT', cursive",color:"orange"}}>Thank You For Shopping</h1>
      <h2>Have A Good Day</h2>
      <p style={{cursor:"pointer"}} onClick={()=>{navigate('/')}}>Click here for Continue Shopping</p>
      <div style={{width:"50%",height:"30%",margin:"auto",marginTop:"20px"}}>
        <img src="https://www.sneakerfactory.net/wp-content/uploads/2015/06/Logo-Embroders.png" width="100%"></img>
      </div>
      </div>
    )
}