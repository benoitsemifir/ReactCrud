import React from 'react'

const style = {
    formGroup : {
        marginBottom : "1.5em"
    }
}

export const UserForm = (props) => {
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            props.handleSubmit();
        }}>
            <div style={style.formGroup}>
                <label htmlFor="name">Nom</label>
                <input type='text' name="name" id="name" value={props.user.name} onChange={props.handleChange}/>
            </div>
            <div style={style.formGroup}>
                <label htmlFor="username">Nom d'utilisateur</label>
                <input type='text' name="username" id="username" value={props.user.username} onChange={props.handleChange}/>
            </div>
            <div style={style.formGroup}>
                <label htmlFor="email">Adresse électronique</label>
                <input type='email' name="email" id="email" value={props.user.email} onChange={props.handleChange}/>
            </div>
            <div style={style.formGroup}>
                <label htmlFor="phone">Téléphone</label>
                <input type='tel' name="phone" id="phone" value={props.user.phone} onChange={props.handleChange}/>
            </div>
            <div style={style.formGroup}>
                <label htmlFor="website">Site web</label>
                <input type='text' name="website" id="website" value={props.user.website} onChange={props.handleChange}/>
            </div>
            <button type="submit">Ajouter</button>
        </form>
    )
}
