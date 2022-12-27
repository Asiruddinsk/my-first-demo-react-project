import Layout from "../pages/Layout";
import Fotter from "./Fotter";
import Heading from "./Heading";


const About = () => {
    return <div>
        <Layout />
        <Heading heading="About Me" />
        <div className="container about">
            <div className="row">
                <div className="col-md-8 col-12 p-3 about border">
                   <h2>My Name is Asiruddin Seakh</h2>
                   <p>Hello everyone, here I have posted the design concept of my first portfolio site. in this project, you will see the site and all its pages.I am a Fronend Developer. I am a professional Webdesigner. I focused on minimalism and easy-to-understand information about myself as a web designer.</p>
                </div>
                <div className="col-md-4 col-12 p-3 about">
                    <img src="img/asiruddinsk786.png" alt="" className="about_img" />
                    <div className="text-center mt-2"><span className="display-6 fs-3 border-bottom border-5 rounded-1 px-3 border-warning text-danger bg-info">My Name is Asiruddin Seakh</span></div>
                </div>
            </div>
        </div>

        <div className="container mt-2 mb-2 about mb-5">
            <div className="row">
                <div className="col-md-3 col-12 py-5 about border">
                    <div className="text-left"><span className="text-center text-danger fs-3 bg-success border-bottom border-5 rounded-5 px-3 border-warning h1">What About My Skills</span>
                    <div className="py-2">
                    <ol>
                    <li>Figma--</li>
                    <li>Adobe Photoshope--</li>
                    <li>Principale--</li>
                    <li>UX Research--</li>
                    <li>Webflow--</li>
                    <li>WordPrees--</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>BOOTSTRAP</li>
                    <li>REACT</li>
                    </ol>
                    </div>
                    
                    </div>
                </div>
                <div className="col-md-9 col-12 py-5 about">
                <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated w-100 bg-success">HTML- 100%</div>
                </div>
                <div className="progress mt-1">
                <div className="progress-bar progress-bar-striped progress-bar-animated w-100 bg-success">CSS- 100%</div>
                </div>
                <div className="progress mt-1">
                <div className="progress-bar progress-bar-striped progress-bar-animated w-75 bg-warning">JAVASCRIPT- 75%</div>
                </div>
                <div className="progress mt-1">
                <div className="progress-bar progress-bar-striped progress-bar-animated w-75 bg-warning">BOOTSTRAP- 75%</div>
                </div>
                <div className="progress mt-1">
                <div className="progress-bar progress-bar-striped progress-bar-animated w-50 bg-info">REACT-- 50%</div>
                </div>
               <div className="progress mt-1">
               <div className="progress-bar progress-bar-striped progress-bar-animated w-25 bg-danger">NODE JS- 25%</div>
               </div>
               <div className="progress mt-1">
               <div className="progress-bar progress-bar-striped progress-bar-animated w-25 bg-danger">MONGO-DB-- 25%</div>
               </div>
                  
                </div>
            </div>
        </div>

        <div className="fotter_text">
        <Fotter />
        </div>
    </div>
}
export default About;