import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


//tvEPM9DOBX7ullpmR4qJXb4iQ7LcH7ot

export const GifGrid = ({category}) => {

  
    const {data:imagenes, loading} = useFetchGifs(category);


    

    // //este codigo solo se ejecuta cuando el componente es renderizado por primera vez
    // useEffect( ()=> {
    //     getGifs(category)
    //         //.then(imgs => setImages(imgs)); es lo mismo que este:
    //         .then( setImages );
    // }, [ category ])




    //getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="card-grid">            
                {
                    imagenes.map( image => (                        
                        <GifGridItem
                            key={ image.id} 
                            {...image}
                        />                                                    
                    ))                
                }            
            </div>
        </>
    )
}
