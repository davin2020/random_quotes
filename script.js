
let rainbowQuotes = [
	"Your existence is revolutionary.",
	"You absolutely are trans enough.",
	"You are already fabulous!",
	"Always be yourself, unless you can be a unicorn!",
	"You are worthy",
	"Your experience matters",
	"It's never too late to be yourself",
	"I didn't realise who I was until I stopped being who I wasn't",
	"Small progress is stil progress",
	"Be yourself, everyone else is already taken - Oscar Wilde",
	"Your experience is valid",
	"Enjoy the now, but know that you will get there"
	];

let rainbowImages = [
	"https://www.goodfreephotos.com/albums/vector-images/pastel-unicorn-vector-clipart.png",
	"https://www.goodfreephotos.com/svgfiles/final401-rainbow-unicorn.svg",
	"https://www.goodfreephotos.com/albums/vector-images/multi-layered-rainbow-heart-vector-clipart.png",
	"images/cartoon-unicorn-is-holding-a-placard-on-a-stars-background-121917929.jpg",
	"images/meritt-thomas-KTYjVDmN4A4-unsplash.jpg"
	];

function chooseRandomItem(arrayItems) {
	let chosenItem = arrayItems[Math.floor(Math.random()*arrayItems.length)];
	// console.log(chosenItem);
	return chosenItem;
}

let newRandomQuote = document.getElementById("getQuote");
newRandomQuote.addEventListener("click", function() {
	console.log('CLICKED');
  	// chooseRandomItem(rainbowQuotes);
  	getRandomQuote();
});

//how to call this when page loads
function getRandomQuote() {
	console.log('called StartGame ie getRandomQuote');
	let selectedQuote = chooseRandomItem(rainbowQuotes);
	updateElementWithContent("userQuote", selectedQuote);
	let selectedImage = chooseRandomItem(rainbowImages);
	// console.log('selectedImage: ' + selectedImage);
	updateElementWithImage("userImage", selectedImage);
}

function updateElementWithContent(element, content) {
	console.log('displayUserItem element: ' + element);
	console.log('displayUserItem content: ' + content);
	document.getElementById(element).innerHTML = content;
}

function updateElementWithImage(element, image) {
		// console.log('updating ' + element + ' with url: ' + image)
		document.getElementById(element).src = image;
}

//call the functions
// console.log('HELLO UNICORNS  - ');
// let randomQuote = chooseRandomItem(rainbowQuotes);
// let randomImage = chooseRandomItem(rainbowImages);
// console.log('randomQuote : ' + randomQuote);
// console.log('randomImage : ' + randomImage);
