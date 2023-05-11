import { Router } from "@vaadin/router";
import { state } from "../../state";

customElements.define(
  "home-page",
  class extends HTMLElement {
    connectedCallback() {
      this.render();
      const buttonNewRoom = this.querySelector(".new-room");
      buttonNewRoom.addEventListener("click", (e) => {
        const cs = state.getState();
        state.setState(cs);
        Router.go("/name");
      });

      //Si elige room existente va a la pagina para ingresar el codigo /new-code
      const buttonExistentRoom = this.querySelector(".existent-room");
      buttonExistentRoom.addEventListener("click", (e) => {
        const cs = state.getState();
        state.setState(cs);
        Router.go("/new-code");
      });
    }
    render() {
      this.innerHTML = `
   
        <div class="contenedor">  
         <div class="header">  
         <h2 class= "titulo">Piedra, Papel ó Tijera</h2>  
         </div>
         <div class="main"> 
          <button  class="new-room">NUEVO</button>  
          <button class="existent-room">ROOM</button>  
           
          </div> 
          <div class="footer">
          
            <footer-component></footer-component>
          
          </div>
        </div>

        `;
    }
  }
);
