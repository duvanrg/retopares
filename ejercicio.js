const prompt = require("prompt-sync")();                    //llamamos la funcion de prompt

class countPairs {
    constructor(size) {
        this.size = size;
        this.projectCosts = [];
    }

    addProjectCosts() {
        let min = Math.ceil(1)
        let max = Math.floor(2 * (10 ** 9));
        for (var i = 0; i < this.size; i++) {
            this.projectCosts.push(Math.floor(Math.random() * (max - min + 1) + min));
        }

        console.log(this.projectCosts);
    }

    comprobeCosts(target) {
        let numbers = [];
        for (var i = 0; i < this.size; i++) {
            for (var j = i; j < this.size; j++) {
                if (this.projectCosts[i] + target === this.projectCosts[j]) {
                    let adding = [this.projectCosts[i], this.projectCosts[j]];
                    for (var k = 0; k < numbers.length; k++) {
                        if ((adding[0] !== numbers[k][0] && adding[1] !== numbers[k][1])||adding[1] !== numbers[k][0] && adding[0] !== numbers[k][1]) {
                            console.log(adding); 
                            console.log("holaaaaaaaaaaaa");
                            numbers.push(adding);
                        }
                    }
                }
            }
        }
        return numbers;
    }
}
let size = 0;
let validate = false;
while (!validate) {
    size = Number(prompt("Digite el tamaño de la lista: "));
    if (0 < size <= (2 * (10 ** 9))) {
        validate = true;
    } else {
        console.log("el tamaño debe ser mayor a 0 y menor a 2x10⁹");
    }
}
let project = new countPairs(size);
project.addProjectCosts();

console.log(project.comprobeCosts(2));
