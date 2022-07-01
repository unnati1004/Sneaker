import React, { useState } from 'react'
import { SliderData } from './Sliderdata'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa';
import './ImageSlider.css'

const ImagesSlider = ({slides}) => {

    const [currentSliderImage, setcurrentSliderImage] = useState(0);
    const length = slides.length

    if(!Array.isArray(slides) || slides.length <= 0){
      return
    }
    
    const prevSlide = () => {
      setcurrentSliderImage(currentSliderImage === 0 ? length - 1: currentSliderImage - 1)
    }
    const nextSlide = () => {
        setcurrentSliderImage(currentSliderImage === length-1 ? 0 : currentSliderImage + 1)
      }
      console.log('currentSliderImage:', currentSliderImage)

  return (
    <section className='ImagesSlider_div_component'>
        <FaArrowLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide,index) => (
            <div className={index === currentSliderImage ? 'slide-active' : 'slide'} key={index} >
              {index === currentSliderImage && (
                <img src={slide.image} alt="images" className='imageSlide' width={'100%'} />
               
              )}
            </div>
        ))}
    </section>
  )
}

export default ImagesSlider