import React, { useEffect, useState } from 'react'
import OurTeamCard from './OurTeamCard'

const OurTeam = () => {
    const [teams,seTteams]=useState([])
    useEffect(() => {
        fetch('/OurTeam.json')
            .then(res => res.json())
            .then(data => seTteams(data))
    }, [])
    console.log(teams)
    return (
        <div>

            <h2 className=" text-center mt-10 text-[#FF3811] text-2xl"> Team</h2>
            <h2 className=" text-center my-5 text-black font-bold text-5xl"> Meet Our Team</h2>
            <p className="text-center mb-10">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which  look even slightly believable</p>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
                {
                    teams.map(item => <OurTeamCard key={item.id} item={item}></OurTeamCard>)
                }
            </div>
        </div>
    )
}

export default OurTeam
