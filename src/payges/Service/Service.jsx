
import { useEffect, useState } from "react"
import ServiseCard from "./ServiseCard"


const Service = () => {

    const [servies, setservies] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setservies(data))
    }, [])

    console.log(servies)


    return (

        <div>
            <h2 className=" text-center mt-10 text-[#FF3811] text-2xl">Service</h2>
            <h2 className=" text-center my-5 font-bold text-black text-5xl">Our Service Area</h2>
            <p className="text-center mb-10">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which  look even slightly believable</p>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 mt-10 justify-center">
                {
                    servies.map((items,idx) => <ServiseCard key={idx} items={items}></ServiseCard>)
                }
            </div>

        </div>
    )
}

export default Service
