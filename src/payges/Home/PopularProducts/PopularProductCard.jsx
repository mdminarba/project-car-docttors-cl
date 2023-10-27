import React from 'react'

const PopularProductCard = ({ item }) => {
    const { name, img, price } = item
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl border">
                <figure><img className='h-52' src={img} alt="" /></figure>
                <div className="card-body text-center">
                    <h2 className=" text-3xl font-bold">{name}</h2>
                    <p className='text-xl font-bold  text-[#FF3811]'>{price} $</p>
                    <div className=" text-center ">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularProductCard
