/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";
axios.get('https://api.github.com/users/WeiWu2')
.then((res) => {
 
  document.querySelector('.cards').appendChild(cardMaker(res.data));
})
.catch((error) => 
{
  console.log(error);
});

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

 const followersArray = [
   'tetondan',
 'dustinmyers',
 'justsml',
 'luishrd',
  'bigknell'
];
followersArray.forEach((person) => {
axios.get('https://api.github.com/users/' + person).then(
  (res) =>{
    document.querySelector('.cards').appendChild(cardMaker(res.data));

  }
);
});
console.log(followersArray);

 function cardMaker(obj){
   // creating card component
   const card = document.createElement('div');
   card.classList.add("card");
   const cardImg = document.createElement('img');
   cardImg.src = obj.avatar_url;
   const cardInfo = document.createElement('div');
   cardInfo.classList.add("card-info");
   const cardName =  document.createElement('h3');
   cardName.classList.add("name");
   cardName.textContent = obj.name;
   const cardUserName =  document.createElement('p');
   cardUserName.classList.add("username");
   cardUserName.textContent = obj.login;
   const cardLocation =  document.createElement('p');
   cardLocation.textContent ="Location: " + obj.location;
   const cardProfile =  document.createElement('p');
   cardProfile.textContent = "Profile: ";
   const cardAddress =  document.createElement('a');
   cardAddress.href = obj.url;
   cardAddress.textContent = obj.url;
   const cardFollowers = document.createElement('p');
   cardFollowers.textContent = "Followers: " + obj.followers;
   const cardFollowing = document.createElement('p');
   cardFollowing.textContent = "Following: " + obj.following;
   const cardBio = document.createElement('p');
   cardBio.textContent = "Bio: " + obj.bio;

  // ordering correct structure 
  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUserName);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardProfile.appendChild(cardAddress);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);
   return card;
 }
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
