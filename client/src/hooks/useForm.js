import { useLocalStorage } from './useLocalStorage'; 

export const useForm = (key, initalValue) => {
    const[values, setValues] = useLocalStorage(key, initalValue)


    

    const handleChanges = e => {
    //e.target.name === 'name' 
    //e.target.value === 'typed input' 
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const clearForm = e => {
        e.preventDefault();
        setValues(initalValue)
    }

    return [values, handleChanges, clearForm];
}