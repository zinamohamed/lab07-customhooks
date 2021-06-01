import { useState, useEffect } from 'react';
import { arnoldHook } from '../services/Api';

const customHook = () => { 
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    arnoldHook()
      .then(characters => {
        setCharacters(characters);
      })
      .finally(() => setLoading(false));

  }, []);
  
  return { loading, characters };
};

export default customHook;