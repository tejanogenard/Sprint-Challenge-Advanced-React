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
                
            </form>
        </div>
    )

}