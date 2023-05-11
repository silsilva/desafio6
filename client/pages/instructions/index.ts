import { state } from "../../state";
import { Router } from "@vaadin/router";

customElements.define(
  "instructions-page",
  class extends HTMLElement {
    connectedCallback() {
      this.render();
      const buttonNewRoom = this.querySelector(".seguir");
      buttonNewRoom.addEventListener("click", (e) => {
        const cs = state.getState();
        const j1 = cs.currentGame.jugador1.name;
        if (j1 == cs.name) {
          state.startUno();
        } else {
          state.startDos();
        }
        state.setState(cs);
        console.log(cs.name);
        console.log(j1);
        Router.go("/esperar");
      });
    }
    render() {
      this.innerHTML = `
      <div class="contenedor">
   
       <div class="texto">
       
         <h3>presiona jugar y elegí: 
         piedra, papel o tijera 
         antes de que pasen 
         los 3 segundos</h3>
       </div>
       <button class="seguir">JUGAR!</button>  
   
       <div class="footer">
       <footer-component></footer-component>
       </div>
          `;
      const style = document.createElement("style");
      style.innerHTML = `
           h3{
            width: 280px;
           }
           @media (min-width: 700px) {
            h3{
              font-size: 38px;
              width: 480px;
             }
           }
            `;
      this.appendChild(style);
    }
  }
);
