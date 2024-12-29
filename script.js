// Function to show feedback
function showFeedback(message) {
    const feedbackElement = document.getElementById("feedback");
    feedbackElement.innerText = message;
    feedbackElement.classList.add("show");
    feedbackElement.classList.remove("hide");

    // Hide feedback after 2 seconds
    setTimeout(() => {
        feedbackElement.classList.add("hide");
        feedbackElement.classList.remove("show");
    }, 2000);
}

// Add event listeners for click actions on each box
document.getElementById("box1").addEventListener("click", function() {
    this.style.backgroundColor = "orange";
    this.innerHTML = "You clicked me!";
    setTimeout(() => {
        this.style.backgroundColor = "#32cd32";
        this.innerHTML = "Click Me 1";
    }, 1000);
    showFeedback("You clicked the first box!"); // Show feedback message
    document.body.style.backgroundColor = "#f0e68c"; // Change background color
    document.querySelector("header").style.backgroundColor = "#ff1493"; // Change header color
});

document.getElementById("box2").addEventListener("click", function() {
    this.style.backgroundColor = "purple";
    this.innerHTML = "You clicked me!";
    setTimeout(() => {
        this.style.backgroundColor = "#32cd32";
        this.innerHTML = "Click Me 2";
    }, 1000);
    showFeedback("You clicked the second box!"); // Show feedback message
    document.body.style.backgroundColor = "#e6e6fa"; // Change background color
    document.querySelector("header").style.backgroundColor = "#00bfff"; // Change header color
});

document.getElementById("box3").addEventListener("click", function() {
    this.style.backgroundColor = "red";
    this.innerHTML = "You clicked me!";
    setTimeout(() => {
        this.style.backgroundColor = "#32cd32";
        this.innerHTML = "Click Me 3";
    }, 1000);
    showFeedback("You clicked the third box!"); // Show feedback message
    document.body.style.backgroundColor = "#fffacd"; // Change background color
    document.querySelector("header").style.backgroundColor = "#ffd700"; // Change header color
});
