import Header from "../pages/Layout";
import Carousl from "./Carusel";
import Fotter from './Fotter';
import Myhome from "./Myhome";



const Home = () => {
    return <div>
        <Header />
        <div className="carousel">
        <Carousl />
        </div>
         <Myhome />

        <div className="fotter_text">
        <Fotter />
        </div>
       
    </div>
}
export default Home;