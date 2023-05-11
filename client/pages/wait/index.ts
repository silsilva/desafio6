import { state } from "../../state";
import { Router } from "@vaadin/router";

customElements.define(
  "wait-page",
  class extends HTMLElement {
    connectedCallback() {
      state.subscribe(() => {
        const cs = state.getState();
        const j1s = cs.currentGame.jugador1.start;
        const j2s = cs.currentGame.jugador2.start;
        if (j1s == true && j2s == true) {
          Router.go("/juego");
        } else {
          this.render();
        }
      });
      this.render();
    }
    who(miNombre, p1, p2) {
      if (miNombre == p1) return p2;
      else return p1;
    }
    render() {
      const miNombre = state.getState().name;
      const roomId = state.getState().roomId;
      const p1 = state.getState().currentGame.jugador1.name;
      const p2 = state.getState().currentGame.jugador2.name;
      const puntos1 = state.getState().puntos.puntosJ1;
      const puntos2 = state.getState().puntos.puntosJ2;
      const esperandoA = this.who(miNombre, p1, p2);
      this.innerHTML = `
      <div class="contenedor">
       <div class="encabezado">
        <div class="iz">
        <p>${p1}:${puntos1}</p>
        <p>${p2}:${puntos2}</p>
        </div>
        <div class="der">
        <p>codigo:${roomId}</p>
        </div>
        </div>
        <div class="texto">
          <h3>Esperando a que ${esperandoA} presione ¡jugar! </h3>
        </div>
    
        <div class="footer">
        <footer-component></footer-component>
        </div>



    </div>

       
            `;
    }
  }
);
