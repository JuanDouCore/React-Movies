import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MovieCard({ pelicula }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' , border: '1px solid #ced4da'}}>
      <Card.Img variant="top" src={pelicula.imageFile} style={{ width: '80%', height: 'auto' }}/>
      <Card.Body>
        <Link to={`/movie/${pelicula.id}`}>
          <Card.Title>{pelicula.titulo}</Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};