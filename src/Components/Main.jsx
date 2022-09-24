import React from "react";
import Card from "./Card";
import Deckinfo from "./Deckinfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Modal from "./Modal";
import useModal from "./useModal";



const Main=()=>{
    const [deckData,setDeckData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0");
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [infoDeck,setInfoDeck]=useState("");
    const {isShowing, toggle} = useModal();
    
   

    const deckFun=async()=>{
        setLoading(true)
        const res= await axios.get(url);
        //console.log(res.data)
        //console.log(deckData) 

        setNextUrl(res.data.meta.next_page)
        setPrevUrl( res.data.meta.previous_page)
        setDeckData([])
        getDeck(res.data)
        setLoading(false)
      
       
    }
   
       
      
    
       
     
    
    const getDeck=async(res)=>{
        res.data.map(async(item)=>{
          //console.log(item)
            setDeckData(state=>{
                state=[...state,item]
                return state;
               
            })
        })
    }
  

    useEffect(()=>{
        deckFun();
    },[url])
    return(
        <>
            
        <div className="container">
        
            <div className="left-content">
            <div class="search">
                    <input type="text" class="searchTerm" placeholder="Search" onChange={(e)=>{
                        var query= e.target.value.toLowerCase();
                        setUrl("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0&fname="+query)
                        
                    }} />
                </div>
           
                <Card deck={deckData} loading={loading} infoDeck={desc=> setInfoDeck(desc)}/>
               
               
               
               
              <div className="btn-group">
                { prevUrl&& <button onClick={()=>{
                    setDeckData([])
                    setUrl(prevUrl)
                }}>Previous</button> }
                <button onClick={()=>{
                     setDeckData([])
                    setUrl(nextUrl)
                }}>Next</button>
              </div>
               
            </div>
            <div className="right-content">
                <Deckinfo data={infoDeck}/>
                <div className="App">
                        { infoDeck&&<button className="button-default" onClick={toggle}>Show Detail</button>}
                         <Modal
                            isShowing={isShowing}
                            hide={toggle}
                            data={infoDeck}
                        />
                    </div>

            </div>
        </div>
        </>
        
    )
    
}

export default Main;