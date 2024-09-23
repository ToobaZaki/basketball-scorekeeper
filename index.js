let scoreA = 0;
let scoreB = 0;

function addPoints(team, points) {
    if (team === 'A') {
        scoreA += points;
        document.getElementById('scoreA').innerText = scoreA;
    } else if (team === 'B') {
        scoreB += points;
        document.getElementById('scoreB').innerText = scoreB;
    }
}

function resetScores() {
    if (confirm('Are you sure you want to reset the scores?')) {
        scoreA = 0;
        scoreB = 0;
        document.getElementById('scoreA').innerText = scoreA;
        document.getElementById('scoreB').innerText = scoreB;
    }
}