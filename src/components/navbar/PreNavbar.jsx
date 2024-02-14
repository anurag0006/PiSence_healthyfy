import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md"
import { FaRegClock } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";


const PreNavbar = () => {
  return (
   <>
    <div className="h-[50px] bg-neutral-800 text-gray-200 text-lg flex justify-around items-center font-normal">
        <div className="flex gap-8 h-[15px]">
            <div className="flex gap-2 items-center border-r-2 border-gray-500 pr-[20px]"> <MdLocationPin className="h-[20px] w-[20px] text-green-500" /> Indirapuram Ghaziabad 201014 </div>
            <div className="flex gap-2 items-center"> <FaRegClock className="h-[15px] w-[15px] text-green-400" /> Tuesday to Sunday: 10am to 6pm</div>
        </div>
        <div className="flex gap-8 items-center">
            <div className="flex gap-2 h-[15px] items-center border-r-2 border-gray-500 pr-[20px]"><CiMail className="h-[20px] w-[20px] text-green-300" />support@healthifycom</div>
            <div className="flex gap-3">
                <FaFacebookF className="hover:text-green-500"/>
                <FaInstagram className="hover:text-green-500"/>
                <FiYoutube className="hover:text-green-500"/>
                <FaLinkedinIn className="hover:text-green-500"/>
             </div>
        </div>
    </div>
   </>
  )
}

export default PreNavbar