import React from "react";
const Card=({deck,loading,infoDeck})=>{
    //console.log(deck)
    return(
        <>
            {
                loading ? <h1>Loading...</h1> :
                    deck.map((item) => {
                        return (
                            <>
                                <div className="card"  key={item.id} onClick={()=>infoDeck(item)}>
                                    <h1>{item.id}</h1>
                                    <h2>{item.name}</h2>
                                    <img src={"https://images.ygoprodeck.com/images/cards/"+item.id+".jpg"} alt="" />
                                </div>
                            </>
                        )
                    })
            }


        </>
    )
}

export default Card;