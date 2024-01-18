// all of the possible reviews
const reviews = [
    {
        id: 1,
        name: "Stephen Curry",
        job: "Chef",
        img: "https://t.ly/-aydj",
        text: "Great store, helps me cook!  "
    },
    {
        id: 2,
        name: "Klay Thompson",
        job: "Trainer",
        img: "https://t.ly/bDkHK",
        text: "Great store, helps me train my clients well!"
    },
    {
        id: 3,
        name: "Draymond Green",
        job: "ESPN Analyst",
        img: "https://t.ly/O0rbc",
        text: "High quality products, high quality clients!"
    },
    {
        id: 4,
        name: "Quin Cook",
        job: "Retired NBA pPlayer",
        img: "https://t.ly/ERixv",
        text: "The stores products, has helped me train my sun into becoming a better basketball player!" 
    },
    {
        id: 5,
        name: "Jonathon Kuminga",
        job: "Police Officer",
        img: "https://t.ly/h1Y2_",
        text: "For athletes, this store is amazing for gear!"
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
// Function to start Slideshow
function startSlideshow() {
    slideshowInterval = setInterval(() => {
      currentItem++;
      if (currentItem > reviews.length - 1) {
        currentItem = 0;
      }
      ss = true;
      showPerson();
    }, 5000); // each review is shown for 5 seconds since 5000ms = 5s
}
//Function to stop slideshow
function stopSlideshow() {
    clearInterval(slideshowInterval);
}

nextBtn.addEventListener("click", function () {
    if (ss == true){ // If slideshow is on, we will stop it so user can take control
        stopSlideshow();
    }
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0; // if we reach last review, we will start over again from the start
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
    currentItem = Math.floor(Math.random() * reviews.length); // enables random reviewa
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


// add own reviews
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
            img: 'https://t.ly/-aydj',
            text: userText
        };

        reviews.push(newUserReview); 
        currentItem = reviews.length - 1; 
        showPerson(); 
    } else {
        alert('Something went wrong... Would you like to try again ?');
    }
});