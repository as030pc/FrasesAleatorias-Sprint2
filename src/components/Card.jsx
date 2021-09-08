import React, { Component } from 'react'
import '../styled/main.css'



export default class Card extends Component {
    constructor() {
        super();
        this.citas = [
            " La peor lucha es la que no se hace (Karl Marx)",
            "La pobreza no viene por la disminución de las riquezas, sino por la multiplicación de los deseos (Platón)",
            "No lastimes a los demás con lo que te causa dolor a ti mismo (Buda)",
            "Exígete mucho a ti mismo y espera poco de los demás. Así te ahorrarás disgustos (Confucio)"
        ]

        
        
        this.state = {
            quote:'El deseo es la verdadera esencia del hombre (Spinoza)'

        }
    }

    cambioCita () {
        const indiceAleatorio = Math.floor(Math.random()*4)
        this.setState({quote:this.citas[indiceAleatorio]})

    }
    
    render() {
        return (
            <div id = "card">
            <h1 id ="titulo-frase"> {this.state.quote}</h1>
            <br />
            <button className="boton-pasar" onClick = {()=>this.cambioCita()}> Nueva cita</button>
            <button className = "boton-twitter"> <img src="https://cdn-icons-png.flaticon.com/512/81/81725.png" alt="" /></button>
            
        </div>
        )
    }
}

