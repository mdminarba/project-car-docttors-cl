import { Link } from 'react-router-dom';
import imae1 from '../../../assets/images/banner/5.jpg'
import imae2 from '../../../assets/images/banner/2.jpg'
import imae3 from '../../../assets/images/banner/3.jpg'
import imae4 from '../../../assets/images/banner/4.jpg'
import imae5 from '../../../assets/images/banner/1.jpg'
import { AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";

const Banner = () => {
  return (
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="absolute lg:pt-[100px] pt-10 px-5 lg:pl-[100px] bg-gradient-to-r rounded-xl from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]  h-full">
    <h2 className=" text-left  text-5xl font-extrabold text-white  leading-tight">Affordable  <br />  Price For Car <br /> Servicing</h2>
    <p className=" leading-tight text-xl mt-5 text-white  ">There are many variations of passages of  available, but <br /> The majority have suffered alteration in some form</p>

    <Link><button className='  mr-5 mt-10 btn btn-outline btn-warning '>Discover More</button></Link>
    <Link><button className=' btn btn-outline btn-success'>Latest Project</button></Link>
    </div>
   
    <img  src={imae1} className="w-full h-screen rounded-xl" />
    <div className="absolute flex gap-7 justify-end mr-12 transform -translate-y-1/2 left-5 right-5 bottom-3">
      <a href="#slide1" className=" btn-circle btn  text-white btn-outline btn-warning  "><AiOutlineArrowLeft className='text3xl  font-bold'></AiOutlineArrowLeft></a> 
      <a href="#slide2" className="  btn-circle btn   text-white btn-outline btn-warning"><AiOutlineArrowRight className='text3xl  font-bold'></AiOutlineArrowRight></a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="absolute lg:pt-[100px] pt-10 px-5 lg:pl-[100px] bg-gradient-to-r rounded-xl from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]  h-full">
    <h2 className=" text-left  text-5xl font-extrabold text-white  leading-tight">Affordable  <br />  Price For Car <br /> Servicing</h2>
    <p className=" leading-tight text-xl mt-5 text-white  ">There are many variations of passages of  available, but <br /> The majority have suffered alteration in some form</p>

    <Link><button className='  mr-5 mt-10 btn btn-outline btn-warning '>Discover More</button></Link>
    <Link><button className=' btn btn-outline btn-success'>Latest Project</button></Link>
    </div>
   
    <img  src={imae2} className="w-full h-screen rounded-xl" />
    <div className="absolute flex gap-7 justify-end mr-12 transform -translate-y-1/2 left-5 right-5 bottom-3">
      <a href="#slide5" className=" btn-circle btn  text-white btn-outline btn-warning  "><AiOutlineArrowLeft className='text3xl  font-bold'></AiOutlineArrowLeft></a> 
      <a href="#slide3" className="  btn-circle btn  text-white btn-outline btn-warning "><AiOutlineArrowRight className='text3xl  font-bold'></AiOutlineArrowRight></a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="absolute  lg:pt-[100px] pt-10 px-5 lg:pl-[100px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]  h-full">
    <h2 className=" text-left  text-5xl font-extrabold text-white  leading-tight">Affordable  <br />  Price For Car <br /> Servicing</h2>
    <p className=" leading-tight text-xl mt-5 text-white  ">There are many variations of passages of  available, but <br /> The majority have suffered alteration in some form</p>

    <Link><button className='  mr-5 mt-10 btn btn-outline btn-warning '>Discover More</button></Link>
    <Link><button className=' btn btn-outline btn-success'>Latest Project</button></Link>
    </div>
   
    <img  src={imae3} className="w-full h-screen rounded-xl" />
    <div className="absolute flex gap-7 justify-end mr-12 transform -translate-y-1/2 left-5 right-5 bottom-3">
      <a href="#slide4" className=" btn-circle btn  text-white btn-outline  btn-warning "><AiOutlineArrowLeft className='text3xl  font-bold'></AiOutlineArrowLeft></a> 
      <a href="#slide4" className="  btn-circle btn  text-white btn-outline btn-warning "><AiOutlineArrowRight className='text3xl  font-bold'></AiOutlineArrowRight></a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className="absolute lg:pt-[100px] pt-10 px-5 lg:pl-[100px] bg-gradient-to-r rounded-xl from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]  h-full">
    <h2 className=" text-left  text-5xl font-extrabold text-white  leading-tight">Affordable  <br />  Price For Car <br /> Servicing</h2>
    <p className=" leading-tight text-xl mt-5 text-white  ">There are many variations of passages of  available, but <br /> The majority have suffered alteration in some form</p>

    <Link><button className='  mr-5 mt-10 btn btn-outline btn-warning'>Discover More</button></Link>
    <Link><button className=' btn btn-outline btn-success'>Latest Project</button></Link>
    </div>
   
    <img  src={imae4} className="w-full h-screen rounded-xl" />
    <div className="absolute flex gap-7 justify-end mr-12 transform -translate-y-1/2 left-5 right-5 bottom-3">
      <a href="#slide3" className=" btn-circle btn  text-white btn-outline  btn-warning  "><AiOutlineArrowLeft className='text3xl  font-bold'></AiOutlineArrowLeft></a> 
      <a href="#slide5" className="  btn-circle btn  btn-warning text-white btn-outline  "><AiOutlineArrowRight className='text3xl  font-bold'></AiOutlineArrowRight></a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <div className="absolute lg:pt-[100px] pt-10 px-5 lg:pl-[100px] bg-gradient-to-r rounded-xl from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]  h-full">
    <h2 className=" text-left  text-5xl font-extrabold text-white  leading-tight">Affordable  <br />  Price For Car <br /> Servicing</h2>
    <p className=" leading-tight text-xl mt-5 text-white  ">There are many variations of passages of  available, but <br /> The majority have suffered alteration in some form</p>

    <Link><button className='  mr-5 mt-10 btn btn-outline btn-warning'>Discover More</button></Link>
    <Link><button className=' btn btn-outline btn-success'>Latest Project</button></Link>
    </div>
   
    <img  src={imae5} className="w-full h-screen rounded-xl" />
    <div className="absolute flex gap-7 justify-end mr-12 transform -translate-y-1/2 left-5 right-5 bottom-3">
      <a href="#slide4" className=" btn-circle btn  text-white btn-outline  btn-warning  "><AiOutlineArrowLeft className='text3xl  font-bold'></AiOutlineArrowLeft></a> 
      <a href="#slide1" className="  btn-circle btn  btn-warning text-white btn-outline  "><AiOutlineArrowRight className='text3xl  font-bold'></AiOutlineArrowRight></a>
    </div>
  </div>
</div>
  )
}

export default Banner
