import { useEffect, useState } from "react"
import PopularProductCard from "./PopularProductCard";

const PopularProducts = () => {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => setPopular(data))
    }, [])
    console.log(popular)
    return (
        <div>

            <h2 className=" text-center mt-10 text-[#FF3811] text-2xl"> Service</h2>
            <h2 className=" text-center my-5 text-black font-bold text-5xl"> Browse Our Products</h2>
            <p className="text-center mb-10">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable</p>

            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
                {
                    popular.map(item => <PopularProductCard key={item.id} item={item}></PopularProductCard>)
                }
            </div>

        </div>
    )
}

export default PopularProducts
