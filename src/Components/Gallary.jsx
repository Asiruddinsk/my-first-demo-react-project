const Gallary = (props) =>{
    return <>
           <div className="container">
            <div className="row">
                <div className="services-text text-center col-md-3 col-12 py-2 px-4 about">
                    <div className="py-4 text-center">
                    <ul>
                        <li><a href="#ded">{props.web}</a></li>
                        <li><a href="#ded">{props.dev}</a></li>
                        <li><a href="#ded">{props.uiDe}</a></li>
                        <li><a href="#ded">{props.htpsd}</a></li>
                        <li><a href="#bot">{props.bot}</a></li>
                        <li><a href="#jq">{props.jq}</a></li>
                        <li><a href="#nod">{props.nod}</a></li>
                        <li><a href="#mongode">{props.mon}</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-9 col-12 text-center">
                   <div className="row">
                    <div className="col-md-6 col-12 about py-2">
                    <div className="text-center py-3 mb-2"><span className="border-bottom border-5 rounded-5 py-2 px-2 border-warning fs-4">{props.responsive}</span></div>
                        <div className="gallary py-4">
                        <a href="img/services2.png" target="_blank" rel="noopener noreferrer">
                        <img src={props.img2} className="img-fluid" alt="" />
                         </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 about py-2">
                        <div className="text-center py-3 mb-2"><span className="border-bottom border-5 rounded-5 py-2 px-2 border-warning fs-4">{props.responsive2}</span></div>
                        <div className="gallary py-4">
                          <a href="img/services1.png" target="_blank" rel="noopener noreferrer">
                          <img src={props.img1} className="img-fluid" alt="" />
                          </a>
                        </div>
                        
                    </div>
                    
                   </div>
                </div>
            </div>
        </div>
    
    </>
}
export default Gallary;