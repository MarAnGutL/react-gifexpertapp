import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['batman']);
    
    // const handleAdd = () =>{
    //     const heroe = 'Mujer maravilla';
    //     // setCategorias([...categorias, 'Mujer Maravilla']);
    //     setCategorias((cate) => [...cate, heroe]);
    // };

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={setCategorias}/>
        <hr/>


        <ol>
            {
                categorias.map((categoria) => {
                    return(
                        <GifGrid 
                            key={categoria}
                            categoria={categoria} 
                        />)
                    // return <li key={categoria}>{categoria}</li>
                })
            }
        </ol>
        </>
        );
};

export default GifExpertApp;