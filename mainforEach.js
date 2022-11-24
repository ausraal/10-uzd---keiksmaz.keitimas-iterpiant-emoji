const emogi = ["ch", "x", "le", "lia", "zd", "ib", "yb"];



const form = document.querySelector('form');

const div = document.querySelector('div');



form.addEventListener('submit', (event) => {

    event.preventDefault();



    const kas = event.target.elements.txt.value;



    let newKas = kas;

    emogi.forEach(num => {

        if (kas.includes(num)) {

            newKas = kas.replace(num, '😱');

        };

    });

    div.textContent = newKas;

    event.target.elements.txt.value = '';

});