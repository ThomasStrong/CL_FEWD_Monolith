# Monolith_Lapidary <img align="center" src="img\favicon-32x32.webp" alt="Monolith Lapidary icon">

<img align="center" src="img\monolithmainlogo.webp" height="150px" alt="Monolith Lapidary">

## Description

Project Repository for Code Louisville Front End Web Development - Monolith Lapidary

## Table of Contents

- [Overview](#overview)
- [Visual Example and Deployed Appication](#visual-example)
- [Instructions](#instructions)
- [CSS Features](#css-features)
- [JavaScript Features](#javascript-features)
- [Technologies](#technologies)
- [Future Development](#future-development)
- [Questions](#questions)
- [Contributions](#contributions)

## Overview

Monolith Lapidary Landing Page - This project is creating a product/service landing page for Monolith Lapidary, an imaginary business that cuts and shapes gemstones for use in jewelry and other applications. The goal is to provide a clean, succinct site for the business that allows users/guests to sample a few stones, read testimonials from happy customers, and to offer different lapidary products and services as provided by the business.
The site is a single page, with JavaScript functions created to hide certain sections, or "pages". The author does, in fact, have a lapidary hobby that will be reflected in the use of personal images in the product gallery. The site continues to be modified as necessary for user experience.
<br></br>

## Visual Example

- Mobile
  <img align="center" src="img\monolithlandingss_mobile.png">
- Desktop
  <img align="center" src="img\monolithlandingss_dtop.png">

Live URL: https://thomasstrong.github.io/Monolith_Lapidary/

## Instructions

The app is hosted at [GitHub Pages](https://thomasstrong.github.io/Monolith_Lapidary/) or, will need to be run locally via development server.

## CSS Features -

- 2 media queries have been utilized at (min) **768px** and (min) **1025px** to provide responsiveness to the site on mobile devices (primarily), tablets, and desktop computers respectively.
  - A third media query was utilized at (max) **1024px** to undo and set transitions in place of the animtion `linkHoverCab`.
- The navigation menu is a humburger menu in mobile view, single row in tablet views, and switches to a column at the highest size.
  - Hamburger menu display properties driven by the function `hamburgerNav()` which toggles the nav links to display/hide on button clicks.
- A CSS animation `linkHoverCab` plays on hover over desktop-view header navigation links. In mobile and tablet views CSS transitions were used to mimic the animation on smaller screens.
- The site has a simple grid layout with nested flexbox content throughout.
- A Web Accessibility Compliance Review was undertaken using Chrome Developer Tools' Lighthouse. A .pdf of the original review can be found in the repository under the filename **lighthousereport1.pdf**. Consequent reports were generated after following suggestions given by the Lighthouse review. The final Lighthouse report is labeled **lighthousereport2.pdf** and shows greater accessibility as well as other metrics.
  <br></br>

## JavaScript Features -

- The mobile version has a hamburger menu driven by `hamburgerNav()`.
- The site uses JavaScript functions to show/hide the different portions of the site as if they were independent pages. These "pages" are navigated using the navigation menu in the header and footer elements.
  - A function was written for each navigation link in the form `goPage()`, where 'Page' is the name of the link and subsequent "page". For example, `goHome()`, `goContact()`, etc.
- An image carousel can be found on the home page that steps through product images at specific timed intervals, ~10 seconds.
  - The function `carousel()` employs a for loop and if statement to step through the images and set them to display one at a time.
- The contact form has a submit button that uses a simple function `onSubmit()` to alert the user that the form recognizes the input even if it does not store information.
  - The `onSubmit()` function also uses code to validate the form fields (first name, last name, and email); validate content in name fields and email components.
  - The contact form also uses the function `redInvalid()` to set the labels of invalid form inputs to red. A similar function, `emailValidate()` validates the email address by checking for the '@' symbol, as well as ending in '.com'. This will need to be updated to accept email adresses in '.net' format, etc.
    <br></br>

## Technologies

- JavaScript
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="5%" />
- CSS
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width="5%" />
- HTML
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width="5%" />
- GIMP
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" alt="HTML" width="5%" />

## Future Development

```
- Continue adding up-to-date pictures
- Add shopping cart
- Have carousel images reflected in gallery via highlight
```

## Questions?

If you have any questions or concerns feel free to reach out to me at [Github](https://github.com/ThomasStrong) or through email at <strng_thms@yahoo.com>.
<br></br>

## Contributions

This project does not currently seek any contributions but, you are welcome to fork the repository.
