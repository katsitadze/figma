function createCard(delay) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");
     const img1 = document.createElement("img");
    img1.src = "img1.jpg";
    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = "Sarah Hogward";
    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = "Space tourism takes giant leap forward";
    const text = document.createElement("p");
    text.classList.add("text");
    text.textContent = "Commercial space travel inches closer to reality as industry leaders announce successful test flights and expedited timelines for space tourism ventures.";
    const additionalInfo = document.createElement("div"); 
    additionalInfo.classList.add("additional-info");
    const expireTime = document.createElement("p");
    expireTime.textContent = `This card will disappear in  ${delay}`;
    const seeMore = document.createElement("div"); 
    seeMore.classList.add("see-more");
    const seeMoreText = document.createElement("p");
    seeMoreText.textContent = "See more";
    const seeMoreArrow = document.createElement("img");
    seeMoreArrow.src = "arrow.png"; 
    seeMore.append(seeMoreText, seeMoreArrow);
    additionalInfo.append(expireTime, seeMore);
    cardContainer.append(img1, author, title, text, additionalInfo);
    document.querySelector(".cards").appendChild(cardContainer);
if (delay>0){


 setTimeout ( ()= >{ 
 cardContainer.remove();}
 delay)

}
}else {
    console.log("the card has firred out ")
}

createCard(15000);
createCard(24000);
createCard(0);
// createCard()
// createCard()
// createCard()