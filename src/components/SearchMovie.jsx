// SearchMovie.jsx
import { useState } from 'react';
import { getPeliculas } from '../service/localStoreage.js';
import { Form, FormControl, Button } from 'react-bootstrap';

export default function SearchMovie({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = (e) => {

    e.preventDefault(); 

    const filteredMovies = getPeliculas().filter(
      (pelicula) =>
        pelicula.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  

    onSearch(filteredMovies);
  };

  return (
    <Form onSubmit={handleSearchClick}>
      <FormControl
        type="text"
        placeholder="Buscar películas por título"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mr-sm-2"
      />
      <Button variant="outline-success" type="submit">
        Buscar
      </Button>
    </Form>
  );
}

