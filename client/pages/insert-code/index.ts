import { state } from "../../state";
import { Router } from "@vaadin/router";

customElements.define(
  "insert-code",
  class extends HTMLElement {
    connectedCallback() {
      this.render();
      const form = this.querySelector(".form");
      //Ingresa el codigo de la room existente y se redirecciona a pagina /name
      form.addEventListener("submit", (e: any) => {
        e.preventDefault();
        const code = e.target.code.value;
        const currentState = state.getState();
        currentState.roomId = code;
        state.setState(currentState);
        console.log(code);

        Router.go("/name");
      });
    }
    render() {
      this.innerHTML = `
    

   <div class="contenedor">
    <div class="header">  
    <h2 class= "titulo">Piedra, Papel ó Tijera</h2>  
    </div>

   <div class="main"> 
   <form class="form">
      <label>ROOM</label>
      <input type="text" name="code">
      <button>COMENZAR</button>
   </form>  
   </div> 

    
      <div class="footer">
      <footer-component></footer-component>
      </div>
    </div>
        `;
    }
  }
);
