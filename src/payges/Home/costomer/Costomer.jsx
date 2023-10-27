import { useEffect, useState } from 'react'
import icon1 from '../../../assets/icons/check.svg'
import icon2 from '../../../assets/icons/deliveryt.svg'
import icon3 from '../../../assets/icons/Group 38729.svg'
import icon4 from '../../../assets/icons/person.svg'
import icon5 from '../../../assets/icons/Wrench.svg'
import icon6 from '../../../assets/icons/group.svg'

const Costomer = () => {
    const [teams, seTteams] = useState([])
    useEffect(() => {
        fetch('/OurTeam.json')
            .then(res => res.json())
            .then(data => seTteams(data))
    }, [])
    console.log(teams)
    return (
        <div>

            <h2 className=" text-center mt-10 text-[#FF3811] text-2xl">Core Feature</h2>
            <h2 className=" text-center my-5 text-black font-bold text-5xl"> Why Choose Us</h2>
            <p className="text-center mb-10">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which  look even slightly believable</p>
            <div className=" flex lg:flex-row flex-col  m-auto  gap-5 my-10">
                <div className="  border text-center p-16 rounded-md">
                    <img className='w-[80px]' src={icon6} alt="" />
                    <p className="w-[100px] pt-5 m-auto font-bold">Expert Team</p>
                </div>
                <div className=" bg-[#FF3811]  border text-center p-16 rounded-md">
                    <img className='w-[80px] ' src={icon3} alt="" />
                    <p className="w-[100px] pt-5 m-auto font-bold">ExpertTeam</p>
                </div>
                <div className="  border text-center p-16 rounded-md">
                    <img className='w-[80px] m-auto' src={icon4} alt="" />
                    <p className="w-[100px] pt-5 m-auto font-bold">Expert Team</p>
                </div>
                <div className="  border text-center p-16 rounded-md">
                    <img className='w-[80px] m-auto' src={icon5} alt="" />
                    <p className="w-[100px] pt-5 m-auto font-bold">Expert Team</p>
                </div>
                <div className="  border text-center p-16 rounded-md">
                    <img className='w-[80px] m-auto' src={icon1} alt="" />
                    <p className="w-[100px] pt-5 m-auto font-bold">Expert Team</p>
                </div>
                <div className=" border text-center p-16 rounded-md">
                    <img className='w-[80px] m-auto' src={icon2} alt="" />
                    <p className="w-[100px] pt-5 m-auto font-bold">Expert Team</p>
                </div>

            </div>
        </div>
    )
}

export default Costomer
