
import throttle from 'lodash.throttle';
import debounce from 'lodash.throttle';

const form = document.querySelector(".feedback-form");

// form.addEventListener("input", updateStorage);
// form.addEventListener("input", debounce(updateStorage, 100, { 'trailing': false }));
form.addEventListener("input", (event) => { debounce(currentuserData, 500, { 'trailing': true })});

// const saveData = debounce(updateStorage, 500);
function updateStorage(evt) {
    localStorage.setItem("feedback-form-state", JSON.stringify(currentuserData(evt)));
};

function loadValuesFromStorage() {
    if (JSON.parse(localStorage.getItem("feedback-form-state")) === null) {
        return;
    }

    const { email, message } = form.elements;

    const getValues = JSON.parse(localStorage.getItem("feedback-form-state"));

    email.value = getValues.email;
    message.value = getValues.message;
};

loadValuesFromStorage();

form.addEventListener("submit", clearStorageAndForm);

function clearStorageAndForm(evt) {
    evt.preventDefault();
    console.log(currentuserData(evt));
    localStorage.removeItem("feedback-form-state");
    evt.currentTarget.reset();
};

function currentuserData(evt) {
    const userData = {};

    const { email, message } = evt.currentTarget.elements;

    userData.email = email.value;
    userData.message = message.value;

    return userData;
}