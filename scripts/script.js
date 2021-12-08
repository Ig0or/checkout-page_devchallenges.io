class itemObj {
    constructor(value, oldValue, less, qtd, plus) {
        this.value = document.querySelector(value);
        this.oldValue = document.querySelector(oldValue);
        this.lessButton = document.querySelector(less);
        this.qtd = document.querySelector(qtd);
        this.plusButton = document.querySelector(plus);

        this.qtdNumber = Number(this.qtd.innerText);
        this.valueNumber = this.value.innerText.replace("$", "");
        this.oldValueNumber = this.oldValue.innerText.replace("$", "");

        this.increaseQtd();
        this.decreaseQtd();
    }

    changeValue() {
        let newValue = 0;
        let newOldValue = 0;
        newValue = this.qtdNumber * this.valueNumber;
        newOldValue = this.qtdNumber * this.oldValueNumber;

        this.value.innerText = `$${newValue.toFixed(2)}`;
        this.oldValue.innerText = `$${newOldValue.toFixed(2)}`;

        calculateTotal();
    }

    increaseQtd() {
        this.plusButton.addEventListener("click", () => {
            if (this.qtdNumber <= 4) {
                this.qtdNumber += 1;
                this.qtd.innerText = this.qtdNumber;
                this.changeValue();
            }
        });
    }

    decreaseQtd() {
        this.lessButton.addEventListener("click", () => {
            if (this.qtdNumber >= 1) {
                this.qtdNumber -= 1;
                this.qtd.innerText = this.qtdNumber;
                this.changeValue();
            }
        });
    }
}

function calculateTotal() {
    this.total = document.querySelector("#total");
    this.item1 = +document.querySelector("#value-1").innerText.replace("$", "");
    this.item2 = +document.querySelector("#value-2").innerText.replace("$", "");
    this.shipping = 19;

    this.total.innerText = `$${(this.item1 + this.item2 + this.shipping).toFixed(2)}`;
}

let item = new itemObj(
    "#value-1",
    "#oldvalue-1",
    "#less-1",
    "#qtd-1",
    "#plus-1"
);

let item2 = new itemObj(
    "#value-2",
    "#oldvalue-2",
    "#less-2",
    "#qtd-2",
    "#plus-2"
);
