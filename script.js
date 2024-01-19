// reviews
const reviews = [
    {
        id: 1,
        name: "Stephen Curry",
        job: "Cook",
        img: "https://phantom-marca.unidadeditorial.es/1c7e80b512d7b2c326e7a684e3d976af/resize/828/f/jpg/assets/multimedia/imagenes/2023/07/13/16892703264593.png",
        text: "Great store, helps me cook!"
    },
    {
        id: 2,
        name: "Klay Thompson",
        job: " Trainer",
        img: "https://sportshub.cbsistatic.com/i/r/2023/12/21/13b65f1d-0914-4944-af32-0d9eb8b6cf34/thumbnail/1200x675/bb57dee2cfc263b6f77db5f64af69722/klay-thompson-still-2023.png",
        text: "100% recommend this store, great gear for my clients"
    },
    {
        id: 3,
        name: "Draymond Green",
        job: "Pro Ref",
        img: "https://media.cnn.com/api/v1/images/stellar/prod/240116110354-01-golden-state-warriors-memphis-grizzlies-011524.jpg?c=16x9&q=h_833,w_1480,c_fill",
        text: "High quality training gear!"
    },
    {
        id: 4,
        name: "Quin Cook",
        job: "Chef",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/59/Quinn_Cook_2019_NBA_Playoffs_%28cropped%29.jpg",
        text: "I feel good wearing these products, using them in my everyday life" 
    },
    {
        id: 5,
        name: "Jonathon Kuminga",
        job: "Professiona Basketball Player",
        img: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630228.png",
        text: "Wearing their products on the court, makes me play better!"
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
const slideshowBtn = document.querySelector(".slideshow")

let currentItem = 0;
let ss = false;

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

// Function that displays client details/reviews
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

function startSlideshow() {
    slideshowInterval = setInterval(() => {
      currentItem++;
      if (currentItem > reviews.length - 1) {
        currentItem = 0;
      }
      ss = true;
      showPerson();
    }, 5000); 
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}

nextBtn.addEventListener("click", function () {
    if (ss == true){ // 
        stopSlideshow();
    }
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0; 
    }
    showPerson();
});

prevBtn.addEventListener("click", function () {
    if (ss == true){
        stopSlideshow();
    }
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener("click", function () {
    if (ss == true){
        stopSlideshow();
    }
    currentItem = Math.floor(Math.random() * reviews.length); 
    showPerson();
});

slideshowBtn.addEventListener("click", function () {
    startSlideshow();
});

const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', function () {
  body.classList.toggle('dark-mode'); 

  
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light Mode';
  } else {
    themeToggle.textContent = 'Dark Mode';
  }
});



const addReviewBtn = document.querySelector('.add-review-btn');

addReviewBtn.addEventListener('click', function() {
    const userName = prompt('Please Enter Your Full Name :');
    const userJob = prompt('Please Enter Your Job/Role :');
    const userText = prompt('What is your review on our company ? :');
    
    if (userText !== null && userText.trim() !== '') {
        const newUserReview = {
            id: reviews.length + 1,
            name: userName,
            job: userJob,
            img: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Quinn_Cook_2019_NBA_Playoffs_%28cropped%29.jpg',
            text: userText
        };

        reviews.push(newUserReview); 
        
        currentItem = reviews.length - 1; 
        showPerson(); 
    } else {
        alert('Something went wrong... Would you like to try again ?');
    }
});
