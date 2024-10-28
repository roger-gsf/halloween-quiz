document.addEventListener('DOMContentLoaded', function () {
    function getCheckedValues(event) {
        event.preventDefault();

        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const selectedValues = Array.from(checkboxes).map(checkbox => checkbox.value);

        alert('You selected: ' + selectedValues.join(', '));
    }

    // const sintomasSelecionados = document.querySelectorAll('input[name="sintomas"]:checked');
    const Score = {
        totalScore: 0,
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

    sintomasSelecionados.forEach((sintoma) => {
        // Atualize a pontuação com base na alternativa selecionada

        if (selectedValues[1] === 'a1') Score.q1 += 1;
        if (selectedValues[2] === 'a2') Score.q2 += 1;
        if (selectedValues[3] === 'a3') Score.q3 += 1;
        if (selectedValues[4] === 'a4') Score.q4 += 1;
        if (selectedValues[5] === 'a5') Score.q5 += 1;
        if (selectedValues[6] === 'a6') Score.q6 += 1;
        if (selectedValues[7] === 'a7') Score.q7 += 1;
        if (selectedValues[8] === 'a8') Score.q8 += 1;
        if (selectedValues[9] === 'a9') Score.q9 += 1;
        if (selectedValues[10] === 'a10') Score.q10 += 1;

    });

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