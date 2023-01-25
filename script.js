
    var player1, player2;

    var images = [
        "./assets/dice-six-faces-one.png",
        "./assets/dice-six-faces-two.png",
        "./assets/dice-six-faces-three.png",
        "./assets/dice-six-faces-four.png",
        "./assets/dice-six-faces-five.png",
        "./assets/dice-six-faces-six.png",
    ]

    function move() {

        document.getElementById("display").style.opacity = "1"

        player1 = Math.floor(Math.random() * 6);
        document.getElementById("player1").src = images[player1]
        player2 = Math.floor(Math.random() * 6);
        document.getElementById("player2").src = images[player2]

        if (player1 > player2) {
            document.getElementById("winner").innerHTML = "Player 1 win 🎉"
        }
        else if (player1 == player2) {
            document.getElementById("winner").innerHTML = "Draw 🎲"
        }
        else {
            document.getElementById("winner").innerHTML = "Player 2 win 🎉"
        }
    }
