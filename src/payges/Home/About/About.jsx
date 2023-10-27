import Picture from '../../../assets/images/about_us/Rectangle 5.jpg'
import Picture2 from '../../../assets/images/about_us/Rectangle.jpg'



const About = () => {
  return (
    <div className="hero min-h-screen pt-10 lg:pb-32 bg-base-200">
      <div className="hero-content  lg:gap-40 flex-col lg:flex-row">
        <div className="relative lg:w-1/2 ">
          <img src={Picture2} className=" rounded-lg shadow-2xl w-full lg:w-[460px] h-[483px] " />
          <img src={Picture} className="max-w-sm lg:absolute sm-hidden left-56 -bottom-20 h:w-[327px] " />
        </div>
        <div className='lg:w-1/2 mt-10'>  
          <h1 className="text-xl mt-10 font-bold text-[#FF3811] lg:w-[370px]">About</h1>
          <h1 className="text-5xl font-bold mt-10 lg:w-[370px]">We are qualified & of experience in this field</h1>
          <p className="py-6 lg:w-[490px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
          <p className="py-6 lg:w-[490px]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className="btn mt-10 bg-[#FF3811] btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  )
}

export default About
