const piedra = require("url:../../img/piedra.svg");
const papel = require("url:../../img/papel.svg");
const tijera = require("url:../../img/tijera.svg");

export function initFooter() {
  class FooterComponent extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super();
      this.render();
    }
    render() {
      const div = document.createElement("div");
      const style = document.createElement("style");
      style.textContent = `
                .img-cont{
                    display: flex;
                   
                    flex-direction: row;
                    width: 50vh;
                    justify-content: space-around;              
                }
                img{
                   
                    width: 100px;
                }
                @media (min-width: 700px) {
            
                  img{
                    
                    width: 180px;
                   }
                 }
            `;
      this.shadow.appendChild(style);

      div.innerHTML = `
                <div class="img-cont">
                    <img class="piedra" src= ${piedra} alt="" name="piedra">
                    <img class="papel" src= ${papel} alt="" name="papel">
                    <img class="tijera" src= ${tijera} alt="" name="tijera">  
                </div>
            `;
      this.shadow.appendChild(div);
    }
  }
  customElements.define("footer-component", FooterComponent);
}
