import { useState } from "react";
import { Logo } from "../../assets"
import PreNavbar from "./PreNavbar";
const Navbar = () => {
  const [isPagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);


  const togglePagesDropdown = () => {
    setPagesDropdownOpen(!isPagesDropdownOpen);
  };

  const toggleServiceDropdown = () =>{
    setServicesDropdownOpen(!isServicesDropdownOpen)
  }
  return (
    <>
    <PreNavbar />
        <div className="flex gap-[500px] items-center sticky top-0 z-50 bg-white shadow-md">
                <div className="flex justify-between"> 
                    <img className="p-2 ml-[120px] h-[100px] w-[100px]" src={Logo} alt="img" />
                </div>
            <div className="b-2 mr-[100px] h-[100px] flex items-center">
                <ul className="flex h-[100px] gap-[30px] justify-between items-center ">
                   {/* { navData.map((item)=>(
                        <li key={item.id} className="text-xl font-semibold hover:text-green-500">{item.title}</li>
                        ))
                   } */}
                   <li className="text-xl text-gray-600 font-semibold hover:text-green-500 h-[100px] flex items-center" >Home</li>
                   <li className="relative text-gray-600 text-xl font-semibold hover:text-green-500 h-[100px] flex items-center" onMouseEnter={togglePagesDropdown} onMouseLeave={togglePagesDropdown}>
                    Pages
                    {
                      isPagesDropdownOpen && (
                        <div className="absolute z-10 ml-[-20px] mt-[245px] text-gray-700 bg-white border border-gray-300 shadow-lg w-[175px]">
                          
                          <a href="#"
                          className="block text-sm text-gray-500 px-4 py-2 hover:bg-gray-100 border-gray-200 border-t-2 border-t-green-500 border-b-2"
                          >
                            About Us
                          </a>
                          <a href="#"
                          className="block text-sm text-gray-500 px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200"
                          >
                            Our Team
                          </a>
                          <a href="#"
                          className="block text-sm text-gray-500 px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200"
                          >
                           Success Story
                          </a>
                          <a href="#"
                          className="block text-sm text-gray-500 px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200"
                          >
                           Video Testimonials
                          </a>
                        </div>
                      )
                    }
                   </li>
                   <li className="text-xl text-gray-600 font-semibold hover:text-green-500 h-[100px] flex items-center" onMouseEnter={toggleServiceDropdown} onMouseLeave={toggleServiceDropdown}>Services
                   {
                      isServicesDropdownOpen && (
                        <div className="bg-white absolute z-10 ml-[-20px] mt-[165px] text-gray-700 border-gray-300 border-t-2 border-t-green-500 shadow-lg w-[225px]" >
                          
                          <a href="#"
                          className="flex justify-between block text-sm text-gray-500 px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200"
                          >
                            With Team
                            <span className="text-sm text-semibold"> &gt; </span>
                          </a>
                          <a href="#"
                          className="flex justify-between block text-sm text-gray-500 px-4 py-2 hover:bg-gray-100 border-b-2 border-gray-200"
                          >
                            Dr Sheenu with Team 
                            <span className="text-sm text-semibold">&gt;</span>
                          </a>
                        </div>
                      )
                    }
                   </li>
                   <li className="text-xl text-gray-600 font-semibold hover:text-green-500 hover:text-green-500 h-[100px] flex items-center">Health Connects</li>
                   <li className="text-xl text-gray-600 font-semibold hover:text-green-500 hover:text-green-500 h-[100px] flex items-center">Contact Us</li>

                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar