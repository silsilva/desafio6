class Countdown extends HTMLElement {
  shadow: ShadowRoot;
  initCount: number;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.initCount = parseInt(this.getAttribute("count"), 10);
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `
      <p class="number">${this.initCount}</p>
      `;

    let p = container.querySelector(".number");
    let counter = this.initCount;
    const intervalID = setInterval(() => {
      counter--;
      p.textContent = counter.toString();
      if (counter < 0) {
        clearInterval(intervalID);
        container.style.display = "none";
      }
    }, 1000);

    const style = document.createElement("style");
    style.innerHTML = `
      .container{
        margin-top:10px;
        margin-left:10%;
          width:245px;
          height:245px;
          border:23px solid black;
          border-radius:50%;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
      }
      @media(min-width:900px){
        .container{
         
          
          margin-top:80px;
          margin-left:40%;
          width:245px;
          height:245px;
         
        }
      }
      .number{
          font-size:100px;
          margin:0px;
      }
          `;
    this.shadow.appendChild(style);
    this.shadow.appendChild(container);
  }
}
customElements.define("custom-countdown", Countdown);
