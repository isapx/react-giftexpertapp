import React from 'react';
import { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {


    const [categories, setcategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     //agregar una nueva categoria
    //     setcategories([...categories,'HunterXHunter']);
    //     setcategories(categ => [...categ, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={ setcategories }/>
            <hr />
           
            <ol>
                {
                    //como en esta funcion solo regresamos un valor en la funcion de flecha, la podemos cambiar por lo que esta mas abajo:
                    // categories.map ( category => {
                    //     return <li key={category}>{category}</li>
                    // })
                    categories.map( category => (
                        <GifGrid 
                            key = {category}
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp