import Layout from "../pages/Layout";
import Map from '../Components/Map';
import Nav from 'react-bootstrap/Nav';
import Fotter from '../Components/Fotter';
import Headiing from '../Components/Heading';
import Form from '../Components/Form';
const Contact = () => {
    return <div>
        <Layout />
        <Headiing heading="Contact with Me" />
        <div className="map">
          <Map />
        </div> 
         <div className="container border bg-info">
                <div className="row contact-form">
                    <div className="col-md-5 col-12 bg-light p-4">
                            <div className="text-center mt-3 mb-3"><span className="text-center bg-light text-danger fs-5 border-bottom border-5 rounded-5 px-1 border-warning h1">Connecting with socialmedia</span></div>
                                <div className="des1">
                                    <Nav.Link href="https://www.facebook.com/asiruddin.sk.96930" target="_blank"><i className="fa fa-facebook"></i></Nav.Link>
                                    <Nav.Link href="https://www.youtube.com/@codewithtech/featured" target="_blank"><i className="fa fa-youtube"></i></Nav.Link>
                                    <Nav.Link href="https://twitter.com/ASIRUDD50316338" target="_blank"><i className="fa fa-twitter"></i></Nav.Link>
                                </div>
                               <div className="des2"><img src="img/9.jpg" className="img-fluid" alt="" /></div>
                               <div className="text-center py-3">
                                <span>Web Designer</span>
                                </div>
                            <div className="des3"><img src="img/laptop.png" className="img-fluid bg-light" alt="" /></div>
                    </div>

                    <div className="col-md-7 col-12 fromeDesign">
                       <Form />
                   </div>
                </div>
         </div>
       
          
         <div className="fotter_text">
        <Fotter />
        </div>
      </div>
}
export default Contact;