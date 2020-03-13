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
                <legend>Type in your Favorite Player!</legend>
                <input
                    label="name"
                 //   className={classes.textField}
                    value={values.name}
                    onChange={handleChanges}
                    margin="normal"
                    variant="outlined"
                    name="name"
                />
            </form>
        </div>
    )

}