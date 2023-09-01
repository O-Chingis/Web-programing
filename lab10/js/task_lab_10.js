/*Задание лабы 10

*/

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const reviewTextarea = document.getElementById("reviewTextarea");
const submitButton = document.getElementById("submitButton");

const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

const checkFormValidity = () => {
	const nameValue = nameInput.value.trim();
	const emailValue = emailInput.value.trim();
	const reviewValue = reviewTextarea.value.trim();

	const isNameValid = nameValue !== "";
	const isEmailValid = emailPattern.test(emailValue);
	const isReviewValid = reviewValue !== "" && reviewValue.replace(/\s+/g, "").length > 0;

	if (isNameValid && isEmailValid && isReviewValid) {
		submitButton.removeAttribute("disabled");
	}else{
		submitButton.setAttribute("disabled", true);
		}
};

nameInput.addEventListener("input", checkFormValidity);
emailInput.addEventListener("input", checkFormValidity);
reviewTextarea.addEventListener("input", checkFormValidity);

const reviewForm = document.getElementById("reviewForm");
reviewForm.addEventListener("submit", (event) => {
		event.preventDefault(); // Prevent form submission

		const nameValue = nameInput.value;
		const emailValue = emailInput.value;
		const reviewValue = reviewTextarea.value;

	const formData = {
	name: nameValue,
	email: emailValue,
	review: reviewValue
	};

	console.log(formData);

});