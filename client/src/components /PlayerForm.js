import React from 'react';
import { useForm } from '../hooks/useForm';

export default function PlayerForm(){
    const [values, handleChanges, clearForm] = useForm('Player', {
        name: ' '
    })

    const handleSubmit = e => {
        e.preventDefault();
        alert(values.name)
        clearForm(e)
    }

    return(
        <div className = "form">
            <form onSubmit = {handleSubmit}>
            <label htmlFor="player">Type in your favorite player</label>
                <input id = "player"
                    label="name"
                    value={values.name}
                    onChange={handleChanges}
                    name="name"
                />
            </form>
        </div>
    )

}