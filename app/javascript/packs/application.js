import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "../application.css"
import "@fortawesome/fontawesome-free/css/all"
import { carousel } from "../components/carousel"
import { navbarUnderline } from "../components/navbarUnderline"
import { hamburger } from "../components/hamburger"
import { removeTopButton } from "../components/removeTopButton"
import { projectFeatures } from "../components/projectFeatures"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener('turbolinks:load', () => {
  carousel()
  hamburger()
  projectFeatures()

  document.addEventListener('scroll', () => {
    navbarUnderline()
    removeTopButton()
  })
})

document.addEventListener("turbolinks:before-cache", function () {
  const sliders = document.querySelectorAll('.slick-initialized');

  sliders.forEach(item => {
    $(item).slick('unslick');
  })
});

import "stylesheets/application"
