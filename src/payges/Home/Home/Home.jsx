
import Service from '../../Service/Service'
import About from '../About/About'
import Banner from '../Banner/Banner'
import MoreServices from '../More Services/MoreServices'
import OurTeam from '../OurTame/OurTeam'
import PopularProducts from '../PopularProducts/PopularProducts'
import Costomer from '../costomer/Costomer'
import CotsomersSays from '../cotsomersSays/cotsomersSays'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Service></Service>
        <MoreServices></MoreServices>
        <PopularProducts></PopularProducts>
        <OurTeam></OurTeam>
        <Costomer></Costomer>
        <CotsomersSays></CotsomersSays>
    

    </div>
  )
}

export default Home
