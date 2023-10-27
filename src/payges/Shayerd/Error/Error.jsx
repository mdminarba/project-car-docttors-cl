import { Link } from 'react-router-dom'
import erroe from '../../../assets/404.Gif'

const Error = () => {
  return (
    <div className=''>
      <div className="h-screen lg:w-[1000px] m-auto"><img src={erroe} alt="" /></div>
<div className="flex justify-center">
    
<Link to="/"><button className="btn btn-success ">Go To Home</button></Link>
</div>
    </div>
  )
}

export default Error
