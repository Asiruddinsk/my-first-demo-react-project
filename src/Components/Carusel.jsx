import Carousel from 'react-bootstrap/Carousel';

const Carousl = () =>{
    return <div className='container-fluid carousel p-0'>
           <Carousel fade>
                <Carousel.Item>
                    <img
                    className="img d-block w-50"
                    src="img/1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className='fs-1 text-warning'>Web Designer</h3>
                    <p className='h5 text-warning'>Frontend developer</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img d-block w-50"
                    src="img/2.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 className='fs-1 text-warning'>Web Developer</h3>
                    <p className='h5 text-warning'>Frontend and backend Developer</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img d-block w-50"
                    src="img/asiruddinsk786.png"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className='fs-1 text-warning'>Full Stack Developer</h3>
                    <p className='h5 text-warning'>
                    Html CSS javascript react node js MongoDB
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
           </Carousel>
    </div>
}
export default Carousl;