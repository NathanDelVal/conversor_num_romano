const romanos = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };

document.addEventListener('DOMContentLoaded', () => {

    for (let el of document.querySelectorAll('form')) {
        el.addEventListener('submit', (e) => {
            e.preventDefault();
        })
    }

    document.querySelector('#AtoR h3').innerText = document.querySelector('#AtoR input').value;

    document.querySelector('#AtoR input').addEventListener('change', (e) => {
        document.querySelector('#AtoR h3').innerText = e.target.value; 
    })

    document.querySelector('#RtoA h3').innerText = converterAtoR(document.querySelector('#RtoA input').value);

    document.querySelector('#RtoA input').addEventListener('change', (e) => {
        document.querySelector('#RtoA h3').innerText = converterAtoR(e.target.value);
    })
})

function setAtoR() {
    document.querySelector('#AtoR h1').innerText = converterAtoR(document.querySelector('#AtoR input').value);
}

function converterAtoR(A_num) {
    A_num = Number(A_num);
    let numero_em_romano = '';
    let exp;


    while (A_num > 0) {

        switch (true) {

            case (A_num >= 1000):
                exp = Math.floor(A_num / 1000);
                for (let x = 0; x < exp; x++) {
                    numero_em_romano = numero_em_romano + 'M';
                }
                A_num = A_num - 1000 * exp;
                break;

            case (A_num >= 500):
                exp = A_num / 500;
                if (exp >= 1.8) {
                    numero_em_romano = numero_em_romano + 'CM';
                    A_num = A_num - 900;
                } else {
                    exp = Math.floor(exp);
                    for (let x = 0; x < exp; x++) {
                        numero_em_romano = numero_em_romano + 'D';
                    }
                    A_num = A_num - 500 * exp;
                }
                break;

            case (A_num >= 100):
                exp = Math.floor(A_num / 100);
                if (exp == 4) {
                    numero_em_romano = numero_em_romano + 'CD'
                } else {
                    for (let x = 0; x < exp; x++) {
                        numero_em_romano = numero_em_romano + 'C';
                    }
                }
                A_num = A_num - 100 * exp;
                break;

            case (A_num >= 50):
                exp = A_num / 50;
                if (exp >= 1.8) {
                    numero_em_romano = numero_em_romano + 'XC';
                    A_num = A_num - 90;
                } else {
                    exp = Math.floor(exp);
                    for (let x = 0; x < exp; x++) {
                        numero_em_romano = numero_em_romano + 'L';
                    }
                    A_num = A_num - 50 * exp;
                }
                break;

            case (A_num >= 10):
                exp = Math.floor(A_num / 10);
                if (exp == 4) {
                    numero_em_romano = numero_em_romano + 'XL'
                } else {
                    for (let x = 0; x < exp; x++) {
                        numero_em_romano = numero_em_romano + 'X';
                    }
                }
                A_num = A_num - 10 * exp;
                break;

            case (A_num >= 5):
                exp = A_num / 5;
                if (exp >= 1.8) {
                    numero_em_romano = numero_em_romano + 'IX';
                    A_num = A_num - 9;
                } else {
                    exp = Math.floor(exp);
                    for (let x = 0; x < exp; x++) {
                        numero_em_romano = numero_em_romano + 'V';
                    }
                    A_num = A_num - 5 * exp;
                }
                break;

            case (A_num >= 1):
                exp = Math.floor(A_num / 1);
                if (exp == 4) {
                    numero_em_romano = numero_em_romano + 'IV'
                } else {
                    for (let x = 0; x < exp; x++) {
                        numero_em_romano = numero_em_romano + 'I';
                    }
                }
                A_num = A_num - 1 * exp;
                break;
        }
    }

    return numero_em_romano;
}

function setRtoA() {
    document.querySelector('#RtoA h1').innerText = converterRtoA(converterAtoR(document.querySelector('#RtoA input').value));
}

function converterRtoA(R_num) {

let roman_split = R_num.split(''); 

   for(let x in roman_split) {
    for(let y in romanos) {
        if(roman_split[x] == y) {
            roman_split[x] = romanos[y];
        }
    }
   }

   let acc = 0;

   for(let x = 0; x < roman_split.length; x++) {
        if(roman_split[x] < roman_split[x + 1]) {
            acc -= roman_split[x];
        } else {
            acc += roman_split[x];
        }
   }

   return acc;
}