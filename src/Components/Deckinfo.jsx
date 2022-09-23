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
                        <div className="cardinfo">
                            <div className="group">
                                <h2>{"Race :"+" "+data.race}</h2>
                            </div>
                            <div className="group">
                                <h2>{data.type}</h2>
                            </div>
                        </div>
                        <div className="base-stat">
                            {data.atk &&<h3>{"ATK:"+" "+data.atk}</h3>}
                            {data.def&&<h3>{"DEF:"+" "+data.def}</h3>}
                        </div>
                    </>
                )
            }


        </>
    )
}

export default Deckinfo;