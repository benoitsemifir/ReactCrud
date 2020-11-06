import React from 'react';

const style = {
    modal:{
        backgroundColor: "#4a4d54" ,
        position: "fixed", /* Stay in place */
        zIndex: 1, /* Sit on top */
        paddingTop: "100px", /* Location of the box */
        left: "50%",
        top:"50%",
        transform: "translate(-50%,-50%)",
        padding: "10%"
    },
    modalContent:{
        // margin:"80%"
    }
}


export const Modal = (props) => {
    return (
        <div>
            <button onClick={props.toggleVisible}>{props.modalText}</button>
            <div style={{...style.modal, display: props.visible ? 'block' : 'none'}}>
                <div style={style.modalContent}>
                    <button
                    style={{float:'right',backgroundColor: 'red', color: 'white'}}
                    onClick={props.toggleVisible}>
                        Fermer
                    </button>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
