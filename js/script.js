document.addEventListener('DOMContentLoaded', function () {
    function getCheckedValues(event) {
        event.preventDefault();
        ;
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')
        const selectedValues = Array.from(checkboxes).map(checkbox => checkbox.value);
    }

    // const sintomasSelecionados = document.querySelectorAll('input[name="sintomas"]:checked');
    let totalScore = 0;
    const Score = {
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        q5: 0,
        q6: 0,
        q7: 0,
        q8: 0,
        q9: 0,
        q10: 0
    };

    Score.forEach((awnser) => {
        if (selectedValues[1] === 'Pamela Vorhess') Score.q1 = 1;
        if (selectedValues[2] === 'All work and no play makes Jack a dull boy') Score.q2 = 1;
        if (selectedValues[3] === 'The Conjuring') Score.q3 = 1;
        if (selectedValues[4] === 'Poltergeists') Score.q4 = 1;
        if (selectedValues[5] === 'Freddy Krueger') Score.q5 = 1;
        if (selectedValues[6] === 'A forest') Score.q6 = 1;
        if (selectedValues[7] === 'The Ghostface mask') Score.q7 = 1;
        if (selectedValues[8] === 'The Ring') Score.q8 = 1;
        if (selectedValues[9] === 'Clowns') Score.q9 = 1;
        if (selectedValues[10] === 'Brain surgery') Score.q10 = 1;
    })

    for (let i = 1; i != 10; i++) {
        
    }

    // sintomasSelecionados.forEach((sintoma) => {
    // Atualize a pontuação com base na alternativa selecionada
    // });

    // document.getElementById('resultado').innerHTML = `
    //     <ul>
    //     <p><li>Tem uma chance ${probabilidades.Leptospirose} de que você tenha Leptospirose.</li></p>
    //     <p><li>Tem uma chance ${probabilidades.Tetano} de que você tenha Tétano.</li></p>
    //     <p><li>Tem uma chance ${probabilidades.Dengue} de que você tenha Dengue.</li></p>
    //     <p><li>Tem uma chance ${probabilidades.DiarreiaAguda} de que você tenha Diarreia aguda.</li></p>
    //     <p><li>Tem uma chance ${probabilidades.HepatiteA} de que você tenha Hepatite A.</li></p>
    //     <p><li>Tem uma chance ${probabilidades.AnimaisPeconhentos} de que você tenha sido picado por um Animal peçonhento.</li></p>
    //     </ul>
    //     `;
});