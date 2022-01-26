import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({categoria}) =>{
    
    const {data: imagenes,loading} = useFetchGifs(categoria);

    // const [imagenes, setImagenes] = useState([]);

    // useEffect(() => {
    //     getGif(categoria)
    //         .then( imgs  => setImagenes(imgs));
    // },[categoria]);

    return(
        <>
            <h3>{categoria}</h3>

            {loading && <p className="animate_animated animate__rotateOut">Loading...</p>}
            <div className="card-grid">
                {
                    imagenes.map((img) => {
                        return(
                            <GifGridItem 
                                key={img.id}
                                { ...img }
                            />
                        )
                    })
                }
            </div>
        </>
    );
};


/* <ol>
        {
            // imagenes.map((imgs) => {
            //     return (<li key={imgs.id}>{imgs.title}</li>)
            // })
    imagenes.map(({id,title}) => (<li key={id}>{title}</li>))
        }
 </ol> */ 

//  {
//     imagenes.map((img) => {
//         return(
//             <GifGridItem 
//                 key={img.id}
//                 img={ img }
//             />
//         )
//     })
// }