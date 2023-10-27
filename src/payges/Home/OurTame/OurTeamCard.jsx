import icon1 from '../../../assets/icons2/Group.svg'
import icon2 from '../../../assets/icons2/Group 4889.svg'
import icon3 from '../../../assets/icons2/Group 4891.svg'
import icon4 from '../../../assets/icons2//Group 4892.svg'
import { Link } from 'react-router-dom'

const OurTeamCard = ({item}) => {
    const { name, img, titel } = item
  return (
    <div>
              <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl border">
                <figure><img className='h-52' src={img} alt="" /></figure>
                <div className="card-body text-center">
                    <h2 className=" text-3xl font-bold">{name}</h2>
                    <p className='text-xl font-bold '>{titel}</p>
                    <div className=" text-center ">
                        <div className="flex gap-3 justify-center">
                            <Link><button><img src={icon2}alt="" /></button></Link>
                            <Link><button><img src={icon3}alt="" /></button></Link>
                            <Link><button><img src={icon4}alt="" /></button></Link>
                            <Link><button><img className='bg-red-500 p-2 rounded-xl' src={icon1}alt="" /></button></Link>
                          
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTeamCard
