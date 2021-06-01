import React from 'react';
import CustomHook  from '../hooks/ArnoldHook';
import CharacterList from '../presentations/CharacterList';

const MainPage = () => {

  const { loading, characters } = CustomHook();
 
  if(loading) return <h1>Loading...</h1>;
  return <CharacterList characters={characters}/>;
   
};

export default MainPage; 