import { useNavigate } from "react-router"
import ImagesSlider from "./sliders/ImagesSlider"
import { SliderData } from "./sliders/Sliderdata"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getitemfailed, getitemloading, getitemsuccess } from "../redux/all/action"
export const Home =()=>{
    const navigate =useNavigate()
   
 return (
    <>
   
    <div className="addvertise">
     {/* <img style={{width:"100%"}} src={img1}></img>    */}
     <ImagesSlider slides={SliderData}  />
     <div className="cat">
    <div><img onClick={()=>{navigate('/men')}} src="https://superkicks.in/wp-content/uploads/2022/04/MAN-F.jpg"></img></div>
    <div><img onClick={()=>{navigate('/women')}} src="https://superkicks.in/wp-content/uploads/2022/04/WOMEN.jpg"></img></div>
    <div><img onClick={()=>{navigate('/all')}}  src="https://superkicks.in/wp-content/uploads/2022/04/APPAREL-F.jpg"></img></div>
     </div>
    </div>
    </>
 )
}