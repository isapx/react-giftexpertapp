//rafc 
import React, { useState }from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setcategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //para evitarel refresco del navegador debido al form
        //console.log('Submit hecho')

        if (inputValue.trim().length > 2 ){ //para cuidar que no este vacio

            setcategories(categ => [inputValue,...categ]);
            setInputValue(''); //reiniciamos el input a vacio
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}
