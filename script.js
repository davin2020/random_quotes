
let rainbowQuotes = [
	"Your existence is revolutionary.",
	"You absolutely are trans enough.",
	"You are already fabulous!",
	"Always be yourself, unless you can be a unicorn!",
	"You are worthy",
	"Your experience matters",
	"It's never too late to be yourself",
	"I didn't realise who I was until I stopped being who I wasn't",
	"Small progress is still progress",
	"Be yourself, everyone else is already taken - Oscar Wilde",
	"Your experience is valid",
	"Keep going, keep trying, keep being you",
	"I am fundamentally ok!",
	"It takes Courages to grow up and become who you really are - E E Cummings",
	"Be proud of who you are, right here, right now",
	"Yes, I am in the right bathroom",
	"Your lives matter; your voices matter; your stories matter; you matter!",
	"Black trans lives matter",
	"I am proud to be me",
	"Courage is being yourself every day, in a world that tells you to be someone else",
	"The only choice I made was to be myself",
	"I am brave, I am bruised. I am who I'm meant to be, This is me! - Lyrics from The Greatest Showman film",
	"Today you are You, that is truer than true. There is no one alive who is Youer than You - Dr Seuss",
	"The world is a better place because you exist",
	"We are powerful because we have survived - Audre Lorde",
	"You got this!",
	"Life isn't binary",
	"Its not my appearance that defines me, but my heart and soul",
	"Transness is a form of evolution - Vixx Thompson"
	];

	//  longer quote options - 
	// "We are powerfull because we have survived, and that is what it is all about, survival and growth - Audre Lorde",
	// "Its not my appearance that defines me, but my heart and soul"
	// "There's nothing wrong with you. There's a lot wrong with teh world you live in.",
	// "Enjoy  now, but know that you will get there",


// store images locally for quicker refresh!
let rainbowImages = [
	"https://www.goodfreephotos.com/albums/vector-images/pastel-unicorn-vector-clipart.png",
	"https://www.goodfreephotos.com/svgfiles/final401-rainbow-unicorn.svg",
	"https://www.goodfreephotos.com/albums/vector-images/multi-layered-rainbow-heart-vector-clipart.png",
	"images/cartoon-unicorn-is-holding-a-placard-on-a-stars-background-121917929.jpg",
	"images/meritt-thomas-KTYjVDmN4A4-unsplash.jpg"
	];
// add more images eg
// MORE UNICORN IMGS
// https://www.redbubble.com/shop/?query=rainbow%20unicorn&ref=search_box
// eg unicorn shape w rainbow color bkg, unicorn kitty/caticorn, unicorn dubbing , unicorn on dino to the disco, unicorn believe in yourself , unicorn pegaus
// santa on unnicorn ,black is my happy color, unicorn always be u sticker
// github rainbow unicorn , unicorn stay legendary sticker


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
  	// any benefit to adding all the code here?
});

//this is the main function called by index page
function getRandomQuote() {
	console.log('called main function ie getRandomQuote');
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
