/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {
  const newCar = document.createElement('div');
  const newButtonLeft = document.createElement('div');
  const newimg1 = document.createElement('img');
  const newimg2 = document.createElement('img');
  const newimg3 = document.createElement('img');
  const newimg4 = document.createElement('img');
  const newButtonRight = document.createElement('div');

  newCar.appendChild(newButtonLeft);
  newCar.appendChild(newimg1);
  newCar.appendChild(newimg2);
  newCar.appendChild(newimg3);
  newCar.appendChild(newimg4);
  newCar.appendChild(newButtonRight);


  newCar.classList.add('carousel');
  newButtonLeft.classList.add('left-button');
  newButtonRight.classList.add('right-button');
   newimg1.src = './assets/carousel/mountains.jpeg';
  newimg2.src = './assets/carousel/computer.jpeg';
  newimg3.src = './assets/carousel/trees.jpeg';
  newimg4.src = './assets/carousel/turntable.jpeg';

  let currentIndex = 0;

  newButtonLeft.addEventListener('click', decrement());
  newButtonRight.addEventListener('click', increment());

}

