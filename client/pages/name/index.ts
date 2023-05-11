import { Router } from "@vaadin/router";
import { state } from "../../state";

customElements.define(
  "name-page",
  class extends HTMLElement {
    connectedCallback() {
      const rtdbRoomId = state.getState().rtdbRoomId;
      this.render();
      const form = this.querySelector(".form");
      form.addEventListener("submit", (e: any) => {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const currentState = state.getState();

        state.signIn(nombre).then(() => {
          console.log(nombre);

          if (currentState.roomId == "") {
            state.askNewRoom(() => {
              state.accessToRoom().then(() => {
                Router.go("/codigo");
              });
            });
          } else {
            state.accessToRoom().then(() => {
              console.log(state.getState().rtdbRoomId);
              state.informacion(state.getState().rtdbRoomId).then((v) => {
                const p1 = v.jugador1.name;
                console.log("HOLA", p1);
                if (v.jugador2 == undefined && nombre !== v.jugador1.name) {
                  state.jugadorDos(() => {
                    Router.go("/instruccion");
                  });
                } else if (
                  nombre == v.jugador1.name ||
                  nombre == v.jugador2.name
                ) {
                  Router.go("/instruccion");
                } else if (
                  nombre != v.jugador1.name ||
                  nombre != v.jugador2.name
                ) {
                  alert("ERROR");
                }
              });
            });
          }
        });
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
      <label>NOMBRE</label>
      <input type="text" name="nombre">
      <button>COMENZAR</button>
   </form>  
   </div> 

    <div class="footer-comp">
    <footer-component></footer-component>
    </div>
    
     
  </div>
        `;
    }
  }
);
