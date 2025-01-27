const facts = [
    {
        text: "Honey never spoils.",
        url: "https://en.wikipedia.org/wiki/Honey"
    },
    {
        text: "A group of flamingos is called a 'flamboyance'.",
        url: "https://en.wikipedia.org/wiki/Flamingo"
    },
    {
        text: "Bananas are berries, but strawberries aren't.",
        url: "https://en.wikipedia.org/wiki/Banana"
    },
    {
        text: "Octopuses have three hearts.",
        url: "https://en.wikipedia.org/wiki/Octopus"
    },
    {
        text: "Wombat poop is cube-shaped.",
        url: "https://en.wikipedia.org/wiki/Wombat"
    },
    {
        text: "A day on Venus is longer than a year on Venus.",
        url: "https://en.wikipedia.org/wiki/Venus"
    },
    {
        text: "The Eiffel Tower can be 15 cm taller during the summer.",
        url: "https://en.wikipedia.org/wiki/Eiffel_Tower"
    },
    {
        text: "Some cats are allergic to humans.",
        url: "https://en.wikipedia.org/wiki/Cat_allergy"
    },
    {
        text: "The shortest war in history lasted 38 minutes.",
        url: "https://en.wikipedia.org/wiki/Anglo-Zanzibar_War"
    },
    {
        text: "A jiffy is an actual unit of time: 1/100th of a second.",
        url: "https://en.wikipedia.org/wiki/Jiffy"
    }
];

const factBox = document.getElementById('fact-box');
const factText = document.getElementById('fact');
const generateBtn = document.getElementById('generate-btn');
const shareBtn = document.getElementById('share-btn');
const readMoreBtn = document.getElementById('read-more-btn');
const toggleBtn = document.getElementById('toggle-btn');

let currentFact = {};

generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    currentFact = facts[randomIndex];
    factText.textContent = currentFact.text;
    readMoreBtn.style.display = 'inline-block'; // Show the Read More button
});

shareBtn.addEventListener('click', () => {
    const fact = factText.textContent;
    if (fact !== "Click the button to generate a random fact!") {
        alert(`Sharing fact: "${fact}"`);
    } else {
        alert("Please generate a fact first!");
    }
});

readMoreBtn.addEventListener('click', () => {
    window.open(currentFact.url, '_blank'); // Open the Wikipedia link in a new tab
});

toggleBtn.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('light-mode');
    toggleBtn.textContent = isDarkMode ? 'Switch to Dark Mode' : 'Switch to Light Mode';
    updateStyles(isDarkMode);
});

function updateStyles(isLightMode) {
    if (isLightMode) {
        document.body.style.backgroundImage = 'url("sdsd/image.png")'; // Light background image
        document.body.style.color = '#000000'; // Dark text color
        document.querySelector('.card').style.backgroundColor = '#ffffff'; // Light card background
        document.querySelector('.fact-box').style.backgroundColor = '#f9f9f9'; // Light fact box
        document.querySelector('.toggle-btn').style.backgroundColor = '#000000'; // Toggle button dark background
        document.querySelector('.toggle-btn').style.color = '#ffffff'; // Toggle button light text
    } else {
        document.body.style.backgroundImage = 'url("./image.png")'; // Dark background image
        document.body.style.color = '#ffffff'; // Light text color
        document.querySelector('.card').style.backgroundColor = '#1e1e1e'; // Dark card background
        document.querySelector('.fact-box').style.backgroundColor = '#2a2a2a'; // Darker fact box
        document.querySelector('.toggle-btn').style.backgroundColor = '#ffffff'; // Toggle button light background
        document.querySelector('.toggle-btn').style.color = '#000000'; // Toggle button dark text
    }
}
