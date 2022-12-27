import Layout from "../pages/Layout";
import Gallary from "./Gallary";
import Fotter from './Fotter';
import Heading from "./Heading";

const Services = (props) => {
    return <div>
        <Layout />
        <div className="className">
        <Heading heading="Our Servicess" />
        <Gallary img1="img/services1.png" img2="img/services2.png" responsive="Desktop Design" responsive2="Tablet Design" web="WebSite Design" dev="Web Development" uiDe="UI Design" htpsd="HTML to PSD" />
        <Gallary img1="img/services6.png" img2="img/services5.png" responsive="Responsive design" responsive2="Mobile Design" web="HTML" dev="CSS" uiDe="JAVASCRIPT" htpsd="REACT" bot="BOOTSTRAP" nod="NODE JS" jq="JQUARY" mon="MONGODB" />
        </div>

        <div className="fotter_text">
        <Fotter />
        </div>
    </div>
}
export default Services;