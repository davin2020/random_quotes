let rainbowQuotes = [
	"Your existence is revolutionary",
	"You absolutely are trans enough",
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
	"I am brave, I am bruised. I am who I'm meant to be, This is me! - from The Greatest Showman film",
	"Today you are You, that is truer than true. There is no one alive who is Youer than You - Dr Seuss",
	"The world is a better place because you exist",
	"We are powerful because we have survived - Audre Lorde",
	"You got this!",
	"Life isn't binary",
	"Its not my appearance that defines me, but my heart and soul",
	"Transness is a form of evolution - Vixx Thompson"
	];

// stored images locally for quicker refresh!
let rainbowImages = [
	"images/pastel-unicorn-vector-clipart.png",
	"images/final401-rainbow-unicorn.svg",
	"images/cartoon-unicorn-is-holding-a-placard-on-a-stars-background-121917929.jpg",
	"images/meritt-thomas-KTYjVDmN4A4-unsplash-cropped.jpg",
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
