document.addEventListener('DOMContentLoaded', function () {
    function getResult(event) {
        event.preventDefault();
        const checkboxes = document.querySelectorAll('input[type="radio"]:checked')
        const selectedValues = Array.from(checkboxes).map(checkbox => radio.value);

        // function modificarTexto() {
        //     var paragrafo = document.getElementById("meuParagrafo");
        //     paragrafo.innerHTML = "Texto modificado!";
        // }

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
    
        Score.forEach((awnser) => {
            if(awnser!=0){
                totalScore+=1;
            }
        })

        
    }
});