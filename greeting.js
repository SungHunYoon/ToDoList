const form = document.querySelector(".js-form"),
	input = document.querySelector("input"),
	greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
	D_BLOCK_CN = "d-block",
	D_NONE_CN = "d-none";
	

function saveName(text) {
	localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
	event.preventDefault();
	const currentValue = input.value;
	paintGreeting(currentValue);
	saveName(currentValue);
}

function askForName() {
	form.classList.remove(D_NONE_CN);
	form.classList.add(D_BLOCK_CN);
	greeting.classList.remove(D_BLOCK_CN);
	greeting.classList.add(D_NONE_CN);
	form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
	form.classList.remove(D_BLOCK_CN);
	form.classList.add(D_NONE_CN);
	greeting.classList.remove(D_NONE_CN);
	greeting.classList.add(D_BLOCK_CN);
	greeting.innerText = `Hello ${text}`;
}

function loadName() {
	const currentUser = localStorage.getItem(USER_LS);
	if (currentUser === null) {
		askForName();
	} else {
		paintGreeting(currentUser);
	}
}

function init() {
	loadName();
}

init();