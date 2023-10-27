import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const ServiseCard = ({ items }) => {

    const {_id, title, img, price } = items
    return (
        <div className="card w-96  bg-base-100 shadow-xl">
            <figure><img className="h-[300px]" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-[25px] font-bold">
                    {title}
                </h2>
                <div className="flex items-center ">
                    <p className="text-xl font-bold my-5 text-[#FF3811]">{price} $</p>
                    <Link to={`/checkout/${_id}`}><button className='text-3xl text-orange-500 font-bold'><AiOutlineArrowRight></AiOutlineArrowRight></button></Link>

                </div>

            </div>
        </div>
    )
}

export default ServiseCard
