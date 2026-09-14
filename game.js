let score = 0;

let player = document.getElementById("player");

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        player.style.left = "100px";
    }

    if (event.key === "ArrowRight") {
        player.style.left = "250px";
    }
});