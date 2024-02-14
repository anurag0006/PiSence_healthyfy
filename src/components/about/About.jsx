import { DoctorHeroSection } from "../../assets"
import Button from "../reusableComponent/Button"

const About = () => {
  return (
   <>
    <div className="ml-[200px] mr-[200px] mt-4">
    <div className="flex justify-around">
    <div className="pt-[40px]"> 
        <img src={DoctorHeroSection} className="h-[550px] width=[450px]" alt="" />
    </div>
       <div className="flex pt-[100px] flex-col gap-[20px]">
       <div className="flex flex-col gap-[20px] w-[500px]">
            <span className="text-lg text-green-500"> About Healthyfy&copy;</span>
            <h1 className="text-3xl font-semibold">Welcome To Healthyfy&copy;</h1>
            <p className="pt-[10px]">
            Hi, I’m Dietician Dr Sheenu Sanjeev. As you’ve seen above in my achievement section, I have been honoured as the Best Dietician and Nutritionist in Delhi NCR. My goal here is to help you take the first step towards a healthy lifestyle. It is not just about looking good but feeling good too; by feeling light and energetic (Although, no harm in getting both, right?). You cannot put a price on that level of confidence that you achieve, once you feel lighter and fitter. It’s a priceless feeling, as described by over 16,000 of my clients. My mission is to educate, counsel, and motivate people from Depression to Inspiration with my secret recipe: GHAR KA KHANA!
            </p>                                              
        </div>
        <div className="mt-[10px] flex gap-[20px] ">
            <Button text="Contact Us" border="border-2 border-black" hover="hover:bg-black hover:text-white"  />
            <Button text="Read More" textColor="text-white" bgColor="bg-green-600" hover="hover:bg-black hover:text-white"/>
        </div>
       </div>
    </div>  
    </div>
   </>
  )
}

export default About