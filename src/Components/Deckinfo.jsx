import React from "react";



const Deckinfo=({data})=>{
  
    console.log(data)
    return(
        <>
            {
                (!data) ? "" : (
                    <>
                        <h1>{data.name}</h1>
                        <img src={"https://images.ygoprodeck.com/images/cards/"+data.id+".jpg"} alt="card-img" />
                        
                       
                   
                    </>
                )
            }


        </>
    )
}

export default Deckinfo;