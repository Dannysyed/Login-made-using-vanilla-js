"use strict";
$(document).ready(() => {
    const studentName = $('small')

    studentName.text('\u00A9 Daniyal Mahmood/8877543 2023')
});
const getCookie_ByName = name => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return "";
};

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
const deleteCookie = name => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

const go_To_Page = url => {
    window.location.href = url;
};

// Function to handle the login process

const handleLogin = () => {
    const user = document.getElementById("user").value;

    if (user) {
        setCookie("user", user, 7); // Stores user cookie for 7 days 
        go_To_Page("login.html");
    } else {

        alert("Please enter a user name.");

    }
};

// Function to handle logout
const handleLogout = () => {
    deleteCookie("user");
    goToPage("index.html");
};
