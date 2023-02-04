function changeBorderColor() {
    document.body.classList += " input__active"
}

function removeBorderColor() {
    document.body.classList.remove("input__active")
}

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove("menu--open")
}