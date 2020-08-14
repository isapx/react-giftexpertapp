import { useState,useEffect } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        getGifs( category )
        .then(imgs => {

       //     setTimeout( () => { //agregamos un retraso de 3 seg para visualizar el Loading

                setState({
                    data: imgs,
                    loading: false
                });

     //       },3000)

           
        })

    }, [category]) //cuando cambia la categoria se dispara este useEffect

    return state; // {data:[], loading: true}

}
