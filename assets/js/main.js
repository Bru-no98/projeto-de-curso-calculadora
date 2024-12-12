function criaCalculadora(){
  return{
    display: document.querySelector('.display'),


    inicia(){
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if(e.keyCode===13)
          this.realizaConta();
      })
    },
    
    cliqueBotoes() {
      document.addEventListener('click', function(e) {
        const el = e.target;
        if(el.classList.contains('btn__num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn__clear')) {
          this.btnClearDisplay();
        }

        if(el.classList.contains('btn__del')) {
          this.btnApagaUm();
        }

        if(el.classList.contains('btn__eq')) {
          this.realizaConta();
        }

      }.bind(this))
    },

    btnParaDisplay(valor) {
      this.display.value += valor
    },

    btnClearDisplay(){
      this.display.value = ''
    },

    btnApagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
      let algarismos = this.display.value;
      if(algarismos.indexOf("+") != -1) {
        const [valor1, valor2] = algarismos.split('+')
        this.display.value = Number(valor1) + Number(valor2);
      };

      if(algarismos.indexOf("-") != -1) {
        const [valor1, valor2] = algarismos.split('-')
        this.display.value = Number(valor1) - Number(valor2);
      };

      if(algarismos.indexOf("*") != -1) {
        const [valor1, valor2] = algarismos.split('*')
        this.display.value = Number(valor1) * Number(valor2);
      };

      if(algarismos.indexOf("/") != -1) {
        const [valor1, valor2] = algarismos.split('/')
        this.display.value = Number(valor1) / Number(valor2);
      };
    }



  };
};

const calculadora = criaCalculadora();
calculadora.inicia();