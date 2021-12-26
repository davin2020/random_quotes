let rainbowQuotes = [
	"DeLorean Ipsum",
	"Save the clock tower, save the clock tower.",
	"Marty, one rejection isn't the end of the world.",
	"Think, McFly, think. I gotta have time to recopy it"
	];

// stored images locally for quicker refresh!
let rainbowImages = [
	"images/pastel-unicorn-vector-clipart.png",
	"images/final401-rainbow-unicorn.svg",
	"images/cartoon-unicorn-is-holding-a-placard-on-a-stars-background-121917929_cropped.jpg",
	"images/meritt-thomas-KTYjVDmN4A4-unsplash_cropped.jpg",
	"images/1538347218.svg",
	"images/1539641676.svg",
	"images/Dinky.svg",
	"images/Glow.svg",
	"images/Gold-Unicorn-Silhouette-2-Circles-2.svg",
	"images/Prismatic-Winged-Unicorn.svg",
	"images/unicorn-blue.svg",
	"images/unicorn-remix.svg",
	"images/Prismatic-Magical-Unicorn-Hearts-6-No-Background.svg",
	"images/Unicorn-Silhouette-6.svg",
	"images/Colorful-Rainbow-Horse.svg"
	];
// "images/multi-layered-rainbow-heart-vector-clipart.png",

function chooseRandomItem(arrayItems) {
	let chosenItem = arrayItems[Math.floor(Math.random()*arrayItems.length)];
	// console.log(chosenItem);
	return chosenItem;
}

let newRandomQuote = document.getElementById("getQuote");
newRandomQuote.addEventListener("click", function() {
	// console.log('CLICKED');
  	// chooseRandomItem(rainbowQuotes);
  	getRandomQuote();
  	// any benefit to adding all the code here?
});

//this is the main function called by index page
function getRandomQuote() {
	// console.log('called main function ie getRandomQuote');
	let selectedQuote = chooseRandomItem(rainbowQuotes);
	updateElementWithContent("userQuote", selectedQuote);
	let selectedImage = chooseRandomItem(rainbowImages);
	// console.log('selectedImage: ' + selectedImage);
	updateElementWithImage("userImage", selectedImage);
}

function updateElementWithContent(element, content) {
	// console.log('displayUserItem element: ' + element);
	// console.log('displayUserItem content: ' + content);
	document.getElementById(element).innerHTML = content;
}

function updateElementWithImage(element, image) {
	// console.log('updating ' + element + ' with url: ' + image)
	document.getElementById(element).src = image;
}
