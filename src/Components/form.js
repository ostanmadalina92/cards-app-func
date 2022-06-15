import React from "react";
import axios from "axios";
import {useState} from 'react';

function Form (props) {
    const [user,setUser] = useState({userName: ""});

    const handleSubmit =  async (event) => {
        event.preventDefault();
        const response =  await axios.get(
            `https://api.github.com/users/${user.userName}`
        );

    props.onSubmit(response.data);
    setUser({userName: ""});       
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={user.userName}
            onChange={(event) => setUser({userName: event.target.value})}
            placeholder="Github username"
            required
            />
            <button>Add Card</button>
        </form>
    )
}

export default Form;