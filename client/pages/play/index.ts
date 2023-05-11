import { state } from "../../state";
import { Router } from "@vaadin/router";
const piedra = require("url:../../img/piedra.svg");
const papel = require("url:../../img/papel.svg");
const tijera = require("url:../../img/tijera.svg");

customElements.define(
  "play-page",
  class extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    jugadaA(j1) {
      if (j1 == "papel") return papel;
      if (j1 == "tijera") return tijera;
      else return piedra;
    }
    jugadaB(j2) {
      if (j2 == "papel") return papel;
      if (j2 == "tijera") return tijera;
      else return piedra;
    }
    abajo(miNombre, p1, jugadaA, jugadaB) {
      if (miNombre == p1) return jugadaA;
      else return jugadaB;
    }
    arriba(miNombre, p1, jugadaA, jugadaB) {
      if (miNombre == p1) return jugadaB;
      else return jugadaA;
    }
    render() {
      const p1 = state.getState().currentGame.jugador1.name;
      const p2 = state.getState().currentGame.jugador2.name;
      const name = state.getState().name;
      const j1 = state.getState().currentGame.jugador1.choice;
      const j2 = state.getState().currentGame.jugador2.choice;
      const jugadaA = this.jugadaA(j1);
      const jugadaB = this.jugadaA(j2);
      const abajo = this.abajo(name, p1, jugadaA, jugadaB);
      const arriba = this.arriba(name, p1, jugadaA, jugadaB);
      const juego = state.calcResult(j1, j2);
      this.innerHTML = `
      <div class="contenedor">
          <div><img src=${arriba}></div>
          <div><img src=${abajo}></div>
      </div>
      `;
      setTimeout(() => {
        state.pushGanador(juego);
        Router.go("/resultado");
      }, 3000);
    }
  }
);
