import React from "react";

export const GifGridItem = ({ title, url}) =>{
    
    console.log( title, url);

    return (
        <div className="card animate__animated animate__backInLeft">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
};

// export const GifGridItem = (img) =>{
    
//     console.log(img);

//     return (
//         <div>
//             {img.title}
//         </div>
//     )
// };