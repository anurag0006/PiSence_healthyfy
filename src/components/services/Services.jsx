import Carousel from "../reusableComponent/Carousel";

function Services() {
  return (
    <>
     
     <div className="bg-slate-700 h-[500px]">
     <div className="ml-[300px] mr-[300px] pt-[80px] text-center">
      <p className="text-2xl text-green-500">-Our Services-</p>
      <h1 className="text-4xl pt-[15px] text-white font-custom">How It Works? </h1>
      <p className="text-white text-lg font-semibold pt-[20px]">If you’re looking for a fast-paced, collaborative environment You’ll enjoy an innovative &
results-oriented culture driven by the facts.</p>
    </div>
     </div>
   <div className="mt-[-200px]">
   <Carousel />
   </div>
    </>
  );
}

export default Services;
