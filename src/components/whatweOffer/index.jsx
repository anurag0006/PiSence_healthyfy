import { offering } from "../../assets";

function WhatweOffer() {
  return (
    <>
      <div className="flex ml-[200px] mr-[100px]">
        <div className="flex flex-col gap-[30px] mt-[30px] pl-[50px] pt-[40px] bg-custom-green text-white w-[50%]">
          <span className="text-xl font-base">-What We Offer</span>
          <h1 className="font-custom text-3xl font-bold">We Are Best Nutrition</h1>
          <p>We do not accept advertising, granting us complete freedom from corporate influences, and that makes us unique from others.</p>
          <div className="flex gap-[30px] h-[90px] border-b-2 border-b-white mr-[80px]">
            <div className="flex justify-center items-center">
              <span className="h-[60px] w-[60px] rounded-full text-black bg-white flex justify-center items-center">1</span>
            </div>
            <div className="flex items-center">
              <p className="text-xl font-semibold font-custom mr-[0px] flex-items-center">Reliable, and Professional Nutrition Great Services</p>
            </div>
            <div className="mt-[20px] h-[2px] border-white"></div> 
          </div>
          <div className="flex gap-[30px] h-[80px] border-b-2 border-b-white mr-[80px] pb-[20px]">
            <div className="flex justify-center items-center ">
              <span className="h-[60px] w-[60px] rounded-full text-black bg-white flex justify-center items-center">2</span>
            </div>
            <div className="flex items-center">
              <p className="text-xl font-semibold mr-[0px] font-custom flex items-center">Communities plan menus & nutritional programs. </p>
            </div>
          </div>
          <div className="flex gap-[30px]">  <p className="text-3xl text-white font-custom font-bold"> Do You Need Our Help </p>  <span className="text-3xl text-white"> &gt; </span></div>
        </div>
        <div className="w-[40%]">
          <img src={offering} className="mb-[60px] mt-[-30px] ml-[-50px]"  alt="" />
        </div>
      </div>
    </>
  );
}

export default WhatweOffer;
