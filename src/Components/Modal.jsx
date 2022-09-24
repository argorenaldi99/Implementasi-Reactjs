import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, data }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
     
        <h1>{data.name}</h1>
    
                        <div className="modalcardinfo">
                        <div className="group">
                        <img src={"https://images.ygoprodeck.com/images/cards/"+data.id+".jpg"} alt="card-img" />
                        <div className="group">
                        <div className="stat">
                           <h3>{"["+data.race+" "+"/"+" "+data.type+"]"+" "+"Attribute:"+" "+data.attribute+" "} {data.level &&"Level:"+" "+data.level}</h3>
                        </div>
                        <div className="desc">
                            {data.desc}
                        </div>
                        <div className="stat2">
                            {data.atk && <><h3>ATK/</h3><h4>{data.atk}</h4></>}
                            {data.def&& <><h3>DEF/</h3><h4>{data.def}</h4></>}
                        </div>
                        </div>
                        </div>  
                
                        </div>
                       
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;