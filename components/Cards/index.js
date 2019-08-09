// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createArticle(deets) {
    const card = document.createElement('div');
    const newHeadline = document.createElement('div');
    const newAuthor = document.createElement('div');
    const imgCont = document.createElement('div');
    const newImg = document.createElement('img');
    const newSpan = document.createElement('span');

    card.appendChild(newHeadline);
    card.appendChild(newAuthor);
    newAuthor.appendChild(imgCont);
    imgCont.appendChild(newImg);
    newAuthor.appendChild(newSpan);

    card.classList.add('card');
    newHeadline.classList.add('headline');
    newHeadline.textContent = deets.headline;
    newAuthor.classList.add('author');
    imgCont.classList.add('img-container');
    newImg.src = deets.authorPhoto;
    newSpan.textContent = `By ${deets.authorName}`;

    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        const articles = Object.entries(response.data.articles);
        console.log(articles);

        for (let i = 0; i < articles.length; i++) {
            // console.log(articles[i][1]);
            let entry = articles[i][1];

            entry.forEach( innerArray => {
                // console.log(innerArray);
                let newCard = createArticle(innerArray);
                const card = document.querySelector('.cards-container');
                card.appendChild(newCard);
            })
        }
    })
    .catch(err => {
        console.log(err);
    })
