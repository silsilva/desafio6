import { state } from "../../state";
import { Router } from "@vaadin/router";

const empate = require("url:../../img/empate.png");
const ganado = require("url:../../img/ganador.png");
const perdedor = require("url:../../img/perdedor.png");

customElements.define(
  "result-page",
  class extends HTMLElement {
    connectedCallback() {
      this.render();
      const buttonNewRoom = this.querySelector(".siguiente");
      buttonNewRoom.addEventListener("click", (e) => {
        state.cleanStartUno();
        state.clearStartDos();
        state.clearChoiceUno();
        state.clearChoiceDos();

        Router.go("/instruccion");
      });
    }

    resultado(calcResult, name, p1, p2) {
      if (calcResult == "empate") return empate;
      if (calcResult == "gano j1" && name == p1) return ganado;
      if (calcResult == "gano j2" && name == p2) return ganado;
      if (calcResult == "gano j1" && name == p2) return perdedor;
      if (calcResult == "gano j2" && name == p1) return perdedor;
    }

    render() {
      const p1 = state.getState().currentGame.jugador1.name;
      const p2 = state.getState().currentGame.jugador2.name;

      const name = state.getState().name;

      const j1 = state.getState().currentGame.jugador1.choice;
      const j2 = state.getState().currentGame.jugador2.choice;

      const juego = state.calcResult(j1, j2);
      const puntos1 = state.getState().puntos.puntosJ1;
      const puntos2 = state.getState().puntos.puntosJ2;
      const calcular = state.calcResult(j1, j2);
      const mostrar = this.resultado(calcular, name, p1, p2);
      var style = document.createElement("style");
      this.innerHTML = `
      <div class="contenedor">
          <div><img src=${mostrar}></div>
          <div class="score">
            <h2>score</h2>
            <p>${p1}:${puntos1}</p>
            <p>${p2}:${puntos2}</p> 
          </div>
    <button class="siguiente">JUGAR</button> 
    </div>
        `;
      if (mostrar == ganado) {
        style.textContent = `
      .contenedor{
        background-color:#0066FF;
      }
     
      `;
      }

      if (mostrar == perdedor) {
        style.textContent = `
      .contenedor{
        background-color:#FF0033;
      }
      
      `;
      }

      if (mostrar == empate) {
        style.textContent = `
      .contenedor{
        background-color:#FFFF66;
      }
      
      `;
      }

      this.appendChild(style);
    }
  }
);
