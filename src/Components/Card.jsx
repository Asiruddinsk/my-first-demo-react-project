import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cardd = (props) => {
    return <div>
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} className="img-fluid" />
                <Card.Body>
                    <Card.Title>{props.tittle}</Card.Title>
                    <Card.Text>
                    {props.para}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

    </div>
}

export default Cardd;