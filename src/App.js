import React from 'react';
import { useState } from 'react';
import './App.css';
import CardsList from './Components/cardsList';
import Form from './Components/form';

function App(props) {

  const [state,setState] = useState({profiles:[]})

    const addNewProfile = (profileData) => {
    setState(previousState => ({
      profiles: [...previousState.profiles, profileData]
    }))
  }
  return (
    <>
      <h1>{props.title}</h1>
      <Form onSubmit={addNewProfile} />
      <CardsList profiles={state.profiles} />
    </>
  );
}

export default App;
