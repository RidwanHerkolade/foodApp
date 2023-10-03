import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliders = [
        {
        
            url: 'https://images.pexels.com/photos/262945/pexels-photo-262945.jpeg'
        },
        {
           
            url: 'https://images.pexels.com/photos/8183569/pexels-photo-8183569.jpeg'
        },
        {
        
            url: 'https://images.pexels.com/photos/13795311/pexels-photo-13795311.jpeg'
        }

    ];
 const moveBack =()=> {
    const firstSlide = currentIndex === 0
    const newIndex = firstSlide ? sliders.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
 };
 const moveNext =()=> {
    const lastSlide = currentIndex === sliders.length - 1
    const newIndex = lastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)

 };
 const moveToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)

 }
   
  return (
     <div className='header__divs'
         style={{ width:"100%", 
                   height: "65vh", 
                   padding: "1.5rem",
                 }} >
          <div className='header__imgs'
                style={{backgroundImage: `url(${sliders[currentIndex].url})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center", 
                width:"100%",
                height: "100%",
                borderRadius: "2rem",
             }} >
                <div className='arrow' style={{ display: "flex", justifyContent:"space-between", alignItems:"center", height: "100%"}}>
                    <div className='back' style={{border:"1px solid transparent", display:"flex",alignItems:"center",background:"#f8b310", justifyContent:"center", lineHeight: "3rem", height:"2.5rem",width:"2.5rem", borderRadius:"2rem", cursor:"pointer"}}> <ArrowBackIosIcon onClick={moveBack} style={{color: "white", width:"1rem", height:"1rem"}}/></div>
                    <div className='for' style={{border:"1px solid transparent", display:"flex",alignItems:"center",background:"#f8b310", justifyContent:"center", lineHeight: "3rem", height:"2.5rem",width:"2.5rem", borderRadius:"2rem", cursor:"pointer"}}> <ArrowForwardIosIcon onClick={moveNext} style={{color:"white", width:"1rem", height:"1rem"}} /></div>
                   
                 </div>

             </div>
             <div className='dots' style={{display: "flex", justifyContent:"center"}}>
                {sliders.map((sliderItem, slideIndex) =>{
                    return (
                        <div className='dot'
                            key={slideIndex}
                            onClick={() => moveToSlide(slideIndex)}
                        
                        >
                            {/* <MoreHorizIcon/> */}
                            <FiberManualRecordIcon style={{color: "orange",width: "1rem", borderRadius: "1px solid yellow"}}/>

                        </div>
                    )
                })}
                 
             </div>
     </div>
  )
}

export default Header