// create index.html
// title: Freelancer Forum
// Create headers with lists below featuring the name, occupation, and starting price of the freelancers
// grab the ul
// add Carol/programmer/$70 to ul
// create the li
// add new freelancers/occupations/starting prices every few seconds
// update average starting price as new freelancers are added to list

const names = document.querySelector(`#names`);
const occupations = document.querySelector(`#occupations`);
const startingPrices = document.querySelector(`#startingPrices`);
const averagePriceDisplay = document.querySelector(`#averagePrice`);

const freelancers = [
  { name: "Carol", occupation: "Programmer", price: "$70" },
  { name: "David", occupation: "Designer", price: "$40" },
  { name: "Emily", occupation: "Consultant", price: "$60" },
  { name: "John", occupation: "Software Engineer", price: "$90" },
];

let freelancerIndex = 0;
let cumulativePrice = 0;

const addFreelancerData = () => {
  if (freelancerIndex < freelancers.length) {
    const freelancer = freelancers[freelancerIndex];

    const nameLi = document.createElement(`li`);
    nameLi.innerText = freelancer.name;
    names.append(nameLi);

    const occupationLi = document.createElement(`li`);
    occupationLi.innerText = freelancer.occupation;
    occupations.append(occupationLi);

    const priceLi = document.createElement(`li`);
    priceLi.innerText = freelancer.price;
    startingPrices.append(priceLi);

    const price = parseFloat(freelancer.price.replace(`$`, ``));
    cumulativePrice += price;

    const averagePrice = cumulativePrice / (freelancerIndex + 1);
    averagePriceDisplay.innerText = ` $${averagePrice.toFixed(2)}`;

    freelancerIndex++;
  } else {
    clearInterval(intervalId);
  }
};

const intervalId = setInterval(addFreelancerData, 3000);