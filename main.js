const message = document.querySelector(".message");
const presents = document.querySelectorAll(".present");

const burger = document.querySelector('.burger');
const bg = document.querySelector('.bg');
const presentImage = document.getElementById('current-image');
const presentTitle = document.querySelector('.second-section__present-description__title');
const presentDescription = document.querySelector('.second-section__present-description__description');

const container = document.querySelector('.container');
const snowFlake = document.querySelector(".snowflake");

//dropdown menu
const wrapperDropdown = document.querySelector(".wrapper-dropdown");
const customInputIcon = document.querySelector(".icon");
const customInput = document.querySelector(".custom-input");
const items = document.querySelectorAll(".item");
const dropdownLabel = document.querySelector(".label");


const presentsArr = [
  {
    id: 1,
    title: "Best sock ever",
    description: "Reuglar sock have no present inside Lorem Ipsum is simply dumm y text of the printing and types etting industry. Lorem",
    image: "/assets/present1.png"
  },
  {
    id: 2,
    title: "Best hate ever",
    description: "Reuglar sock have no present inside Lorem Ipsum is simply dumm y text of the printing and types etting industry. Lorem",
    image: "/assets/present2.png"
  },
  {
    id: 3,
    title: "Best present ever",
    description: "Reuglar sock have no present inside Lorem Ipsum is simply dumm y text of the printing and types etting industry. Lorem",
    image: "/assets/present3.png"
  },
];

//burger opening mechanics  
burger.addEventListener('click', () => {
  bg.classList.toggle("open-sidebar");
  burger.classList.toggle("is--open");
})

//parallax effect
container.addEventListener('scroll', () => {
  const value = container.scrollTop / 1.6;
  snowFlake.style.bottom = value + 'px'
})

//show message after 3s
setTimeout(() => {
  message.classList.add("show-message")
}, 3000);

//drop down menu mechanics
customInput.addEventListener('click', () => {
  if (wrapperDropdown.classList.contains("active")) {
    handleDropdown(false);
  } else {
    handleDropdown(true);
  }
})

items.forEach(item => {
  item.addEventListener('click', (e) => {
    dropdownLabel.innerHTML = e.target.innerHTML;
  })
})

document.addEventListener('click', (e) => {
  if (e.target.closest(".custom-input") === null) {
    handleDropdown(false);
  }
})

function handleDropdown(open) {
  if (open) {
    customInputIcon.classList.add("icon-rotate");
    wrapperDropdown.classList.add("active");
  } else {
    customInputIcon.classList.remove("icon-rotate");
    wrapperDropdown.classList.remove("active");
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    handleDropdown(false);
  }
})

presents.forEach(present => {
  present.addEventListener('click', (e) => {
    document.querySelector('.active').classList.remove('active');
    present.classList.add('active');
    const currentId = +e.target.getAttribute('id') - 1;

    presentImage.setAttribute('src', presentsArr[currentId].image);
    presentTitle.innerHTML = presentsArr[currentId].title;
    presentDescription.innerHTML = presentsArr[currentId].description;
  })
})





