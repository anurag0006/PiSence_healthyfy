import Slider from 'react-slick';
import { ServiceCardData } from '../../constants/ServiceCardData';

function Carousel() {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  
  
  return (
    <div className="slider-container mr-[150px] ml-[150px]">
    <Slider {...settings}>
      {ServiceCardData.map((item,index)=>(
        <div key={index} className='h-[700px] pl-[20px]'>
         <div className='flex flex-col gap-[30px]'>
         <div> 
            <img src={item.src} alt="" className='h-[250px] w-[100%]' />
          </div>
          <div className='flex pl-[20px] pr-[20px] flex-col gap-[30px]'>
            <h1 className='text-3xl font-custom'>
                {item.heading}
            </h1>
            <p>
              {item.text}
            </p>
          </div>
         </div>
        </div>
      ))}
    </Slider>
  </div>
  );
}

export default Carousel;
