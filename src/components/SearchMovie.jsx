// SearchMovie.jsx
import { useState } from 'react';
import { getPeliculas } from '../service/localStoreage.js';
import { Form, FormControl, Button } from 'react-bootstrap';

export default function SearchMovie({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {

    const filteredMovies = getPeliculas().filter(
      (pelicula) =>
        pelicula.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  

    onSearch(filteredMovies);
  };

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Buscar películas por título"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mr-sm-2"
      />
      <Button variant="outline-success" onClick={handleSearchClick}>
        Buscar
      </Button>
    </Form>
  );
}

