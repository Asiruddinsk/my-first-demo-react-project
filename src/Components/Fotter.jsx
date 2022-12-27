import Nav from 'react-bootstrap/Nav';
import { Outlet, NavLink } from "react-router-dom";



const Fotter = () =>{
      const date = new Date();
    
      
    return <div className="container-fluid p-0 bg-dark p-5">
          <div className="container text-center">
            <div className="designer"><img className='img-fluid' src="img/asiruddinsk786.png" alt="" /></div>
              <div className="row">
                    <div className="fotter col-md-4 col-12 py-2">
                    <Nav.Link><NavLink className="text-decoration-none navlink" to="/">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-decoration-none navlink" to="/About">About</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-decoration-none navlink" to="/Services">Services</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-decoration-none navlink" to="/Contact">Contact</NavLink></Nav.Link>
                    </div>
                    <div className="fotter col-md-4 col-12 py-2">
                    <Nav.Link><NavLink className="text-decoration-none navlink" to="/">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-decoration-none navlink" to="/About">About</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-decoration-none navlink" to="/Services">Services</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-decoration-none navlink" to="/Contact">Contact</NavLink></Nav.Link>
                    </div>
                    <div className="fotter col-md-4 col-12 py-2">
                    <Nav.Link><NavLink className="text-decoration-none navlink" to="/">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-decoration-none navlink" to="/About">About</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-decoration-none navlink" to="/Services">Services</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-decoration-none navlink" to="/Contact">Contact</NavLink></Nav.Link>

                    <Outlet />
                    </div>
              </div>
              <div className="mt-3"><span className="text-light">Copyright {date.getFullYear()}  by Refsnes Data. All Rights Reserved with the CodeWithTech. </span></div>
          </div>

    </div>
}
export default Fotter;