import { Link } from "react-router-dom"
import icone from "../../../assets/images/icon/001-timetable.svg"
import icone2 from "../../../assets/images/icon/Group 34.svg"
import icone3 from "../../../assets/images/icon/Group 35.svg"

const MoreServices = () => {
  return (
    <div>
        <div className=" text-center my-10">
        <Link><button className="btn text-lg btn-outline btn-error">More Services</button></Link>
        </div>

        <div className=" bg-black flex lg:flex-row flex-col justify-around p-20 ">
            <div className="flex items-center gap-4">
                <div className="">
                <img src={icone} alt="" />
                </div>
                <div className="">
                <p className="text-[#FFF] mb-2 font-medium">We are open monday-friday</p>
                <h2 className=" text-2xl text-[#FFF] font-bold">7:00 am - 9:00 pm</h2>
                </div>
                
            </div>
            <div className="flex items-center gap-4">
                <div className="">
                <img src={icone2} alt="" />
                </div>
                <div className="">
                <p className="text-[#FFF] mb-2  font-medium">Have a question?</p>
                <h2 className="text-2xl text-[#FFF] font-bold">+2546 251 2658</h2>
                </div>
               
            </div>
            <div className="flex items-center gap-4">
                <div className="">
                    <img src={icone3} alt="" />
                </div>
                <div className=""><p className="text-[#FFF] mb-2  font-medium">Need a repair? our address</p>
                <h2 className="text-2xl text-[#FFF] font-bold">Liza Street, New York</h2></div>
            </div>

        </div>
      
    </div>
  )
}

export default MoreServices
