import { state } from "../../state";
import { Router } from "@vaadin/router";

customElements.define(
  "code-page",
  class extends HTMLElement {
    connectedCallback() {
      this.render();
      const buttonNewRoom = this.querySelector(".siguiente");
      buttonNewRoom.addEventListener("click", (e) => {
        Router.go("/instruccion");
      });
    }
    render() {
      const roomId = state.getState().roomId;

      this.innerHTML = `
      

   

 
    <div class="contenedor">
      <div class="texto">
      <h3>compartí el código con tu contrincante</h3>
      <h3>${roomId}</h3>
      </div>
      <button class="siguiente">SIGUIENTE</button>  
      <div class="footer">
        <footer-component></footer-component>
      </div>



    </div>


        `;
    }
  }
);
