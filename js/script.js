"use strict";
const btn = document.querySelector(".contacts__select");
const btnContactWrap = document.querySelector(".contacts__select-block");
const list = document.querySelector(".contacts__list");
const arrowContacts = document.querySelector(".contacts__arrow");
const items = document.querySelectorAll(".contacts__item");
const images = [...document.querySelectorAll(".service__img")];
const buttons = [...document.querySelectorAll(".service__btn")];
const arrowPrice = document.querySelectorAll(".prices__arrow");
const blockWrapPrice = document.querySelectorAll(".prices__block");
const blockTitlePrice = document.querySelectorAll(".prices__block-wrap");
const wrapPrice = document.querySelectorAll(".prices__price-wrap");
const line = document.querySelectorAll(".prices__line");
const contactsCity = document.querySelector(".contacts__cities");
const headerLinks = document.querySelectorAll(".header__link");
const header = document.querySelector(".header");
const wrap = document.querySelector(".wrap");
const listHeader = document.querySelector(".header__list");
const cities = [
    {
        city: "Canandaigua, NY",
        phone: "+1	585	393 0001",
        address: "151 Charlotte Street",
    },
    {
        city: "New York City",
        phone: "+1	212	456 0002",
        address: "9 East 91st Street",
    },
    {
        city: "Yonkers, NY",
        phone: "+1	914	678 0003",
        address: "511 Warburton Ave",
    },
    {
        city: "Sherrill, NY",
        phone: "+1	315	908 0004",
        address: "14 WEST Noyes BLVD",
    },
];

const openPrice = () => {
    arrowPrice.forEach((arrow, i) => {
        arrowPrice[i].addEventListener("click", (e) => {
            wrapPrice[i].classList.toggle("display");
            blockWrapPrice[i].classList.toggle("bg");
            blockTitlePrice[i].classList.toggle("bg");
            line[i].classList.toggle("width-line");
            arrowPrice[i].classList.toggle("arrow-effect");
        });
    });
};

const getFilter = () => {
    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (document.querySelector(".service__btn.active")) {
                document
                    .querySelector(".service__btn.active")
                    .classList.remove("active");
                e.currentTarget.classList.add("active");
            } else {
                e.currentTarget.classList.add("active");
            }
            images.forEach((img) => {
                let images = img.src.slice(0, 34);
                let image = images[images.length - 1];
                if (btn.textContent === "Gargens") {
                    if (image !== "g") {
                        img.classList.add("filter");
                    } else if (image === "g") {
                        img.classList.remove("filter");
                    }
                } else if (btn.textContent === "Lawn") {
                    if (image !== "l") {
                        img.classList.add("filter");
                    } else if (image === "l") {
                        img.classList.remove("filter");
                    }
                } else if (btn.textContent === "Planting") {
                    if (image !== "p") {
                        img.classList.add("filter");
                    } else if (image === "p") {
                        img.classList.remove("filter");
                    }
                }
            });
        });
    });
};

const getOpen = () => {
    btnContactWrap.addEventListener("click", (e) => {
        list.classList.toggle("display");
        arrowContacts.classList.add("rotate");
        btn.classList.toggle("display-select");
    });
};
const getChoose = () => {
    items.forEach((item) => {
        item.addEventListener("click", (e) => {
            list.classList.remove("display");
            arrowContacts.classList.toggle("rotate");
            btn.classList.remove("display-select");
            console.log(e.currentTarget.dataset.city);
            btn.innerHTML = `${e.currentTarget.textContent}<div class="contacts__arrow"></div>`;
            cities.forEach((city) => {
                if (
                    city.city[0].toLowerCase() ===
                    e.currentTarget.dataset.city[0]
                )
                    contactsCity.innerHTML = `<p class="contacts__city"><span class="contacts__city-span city">City:</span>${city.city}</p>
                <p class="contacts__city"><span class="contacts__city-span phone">Phone:</span>${city.phone}</p>
                <p class="contacts__city"><span class="contacts__city-span address">Office address:</span>${city.address}</p>
                <button class="contacts__btn">Call us</button>`;
            });
            contactsCity.classList.add("add-cities");
        });
    });
};

getFilter();
getChoose();
getOpen();
openPrice();
