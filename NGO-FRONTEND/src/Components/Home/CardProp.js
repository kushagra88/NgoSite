import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProp({data,title,text}) {
  return (
    <Card style={{ width: '16rem' , backgroundColor:"#f0f0f0" }} >
      <Card.Img variant="top" src={data} style={{height:"60%", padding:"2rem"}} />
      <Card.Body>
        <Card.Title style={{textAlign:"center" ,
                            fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" ,
                            color:"#686968", 
                            marginTop:"2rem"
                            }}>{title}</Card.Title>
        <Card.Text style={{fontSize:"1rem"}}>
          {text}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CardProp;