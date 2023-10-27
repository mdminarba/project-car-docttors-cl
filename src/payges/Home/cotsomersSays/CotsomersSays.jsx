import icone from "../../../assets/images/team/Ellipse 2 (1).jpg"
import icone4 from "../../../assets/images/team/quote 1.svg"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const CotsomersSays = () => {
  return (
    <div>
      <h2 className=" text-center mt-10 text-[#FF3811] text-2xl">Testimonial</h2>
      <h2 className=" text-center my-5 text-black font-bold text-5xl">What Customer Says</h2>
      <p className="text-center  mb-10">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which  look even slightly believable</p>
      <div className="flex gap-2 justify-center items-center">
        <AiOutlineArrowLeft className=' btn-circle btn  text-white btn-outline btn-error   font-bold'></AiOutlineArrowLeft>
        <div className="w-1/2  py-16 px-5">
          <div className="flex gap-24">
            <div className="flex items-center gap-2">
              <img className="h-16 w-16" src={icone} alt="" />
              <div className="">
                <h2 className="text-2xl font-bold">Awlad Hossain</h2>
                <p className="">Businessman</p>
              </div>
            </div>
            <img className="w-20 text-red-200 " src={icone4} alt="" />
          </div>
          <div className="">
            <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          </div>
          <div className="rating my-5">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          </div>
        </div>
        <div className="w-1/2 py-16 px-5">
          <div className="flex gap-24">
            <div className="flex items-center gap-2">
              <img className="h-16 w-16" src={icone} alt="" />
              <div className="">
                <h2 className="text-2xl font-bold">Awlad Hossain</h2>
                <p className="">Businessman</p>
              </div>
            </div>
            <img className="w-20 text-red-200 " src={icone4} alt="" />
          </div>
          <div className="">
            <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          </div>
          <div className="rating my-5">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          </div>
        </div>
        <AiOutlineArrowRight className='btn-circle btn btn-error text-white btn-outline  font-bold'></AiOutlineArrowRight>

      </div>

    </div>
  )
}

export default CotsomersSays
