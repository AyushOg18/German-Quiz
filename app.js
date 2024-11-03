const correctAnswers = {
    q1: "d.singen",
    q2: "A.Tanzen",
    q3: "A.Ein Geschenk für den ersten Schultag",
    q4: "A.Hefter",
    q5: "B.Kalt und nass",
    q6: "B.Sommer",
    q7: "C.Es erhält die Endung '-en'",
    q8: "B.schneller",
    q9: "B.Mietwohnungen für Fabrikarbeiter",
    q10: "C.Energieeffizienz und nachhaltige Technologien",
    q11: "B.Patientenzentrierte Pflege",
    q12: "A.King Frederick William I"
};

document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    let feedback = "";

    for (let question in correctAnswers) {
        const answer = document.querySelector(`input[name="${question}"]:checked`);
        if (answer && answer.value === correctAnswers[question]) {
            score++;
        } else {
            feedback += `<p>Frage ${question.replace("q", "")}: Ihre Antwort: ${answer ? answer.value : "Keine Antwort"} - Korrekte Antwort: ${correctAnswers[question]}</p>`;
        }
    }

    feedback = `<p>Sie haben ${score} von ${totalQuestions} Fragen richtig beantwortet.</p>` + feedback;
    document.getElementById("result").innerHTML = feedback;
});
