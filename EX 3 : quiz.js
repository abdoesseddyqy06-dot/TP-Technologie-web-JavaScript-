let questions = [
    ["Capital du Maroc ?", "Rabat"],
    ["2 + 2 ?", "4"],
    ["Couleur du ciel ?", "bleu"]
];

function lancerQuiz() {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        let reponse = prompt(questions[i][0]);

        if (reponse == questions[i][1]) {
            console.log("Réponse juste");
            score++;
        } else {
            console.log("Réponse fausse");
        }
    }

    console.log("Score = " + score + "/" + questions.length);
}
