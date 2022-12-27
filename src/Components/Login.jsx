import Layout from "../pages/Layout";
import Form from '../Components/Form';
import Map from '../Components/Map';
import Fotter from "./Fotter";

const Login = () => {
    return <div>
        <Layout />
        <div className="container mt-5 bg-info bg-opacity-10 px-5">
          <div className="row">
            <div className="col-md-6 col-12 mt-5">
              <Map />
            </div>
            <div className="col-md-6 mt-5 mb-5 col-12 fromeDesign">
            <Form />
            </div>
          </div>
        </div>

        <div className="fotter_text">
        <Fotter />
        </div>

    </div>
}
export default Login;