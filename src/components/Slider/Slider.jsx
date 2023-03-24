import React, {useState} from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";
import Products from '../../pages/Products/Products';
import { Link } from 'react-router-dom';




export const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);


    const data = [
        "https://images.pexels.com/photos/1252982/pexels-photo-1252982.jpeg",
        "https://images.pexels.com/photos/8499119/pexels-photo-8499119.jpeg",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg"
      ];


      const delay = 5000;
      const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
      };
      const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
      };

      // setTimeout(()=>{
      //   nextSlide()
      // },5000)

      // setInterval(function(){
      //   prevSlide()
      // }, 2000);

      React.useEffect(()=> {
        setTimeout(
          () =>
        nextSlide(), delay
        );

      })
      
    


//       var Start=0;

// function slider(){
//     if(Start<data.length){
//         Start=Start+1;
//     }
//     else{
//         Start=1;
//     }
    // console.log(img);
    // img.innerHTML = "<img src="+data[Start-1]+">";
    
   
// }
// setInterval(slider,2000);



  return (
<div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />

      </div>
      <Link className='link' to="/products/1" >
      <button >
        
        Shop Now
        </button>
        </Link>

      {/* <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div> */}
    </div>  )
}
