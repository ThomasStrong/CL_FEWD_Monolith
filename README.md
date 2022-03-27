# CL_FEWD_Monolith

Project Repository for Code Louisville Front End Web Development - Monolith Lapidary

Description -

- Monolith Lapidary Landing Page - This project is creating a product/service landing page for Monolith Lapidary, an imaginary business that cuts and shapes gemstones for use in jewelry and other applications. The goal is to provide a clean, succinct site for the business that allows users/guests to sample a few stones, read testimonials from happy customers, and to offer different lapidary products and services as provided by the business.
  The site is a single page, with JavaScript functions created to hide certain sections, or "pages". The author does, in fact, have a lapidary hobby that will be reflected in the use of personal images in the product gallery. The site continues to be modified as necessary for user experience.

CSS Features -

- 2 media queries have been utilized at (min) 768px and (min) 1025 px to provide responsiveness to the site on mobile devices (primarily), tablets, and desktop computers respectively.
  + A third media query was utilized at (max) 1024 px to undo and set transitions in place of the animtion linkHoverCab.
- The navigation menu is a humburger menu in mobile view, single row in tablet views, and switches to a column at the highest size.
  + Hamburger menu display properties driven by the function hamburgerNav() which toggles the nav links to display/hide on button clicks.
- A CSS animation linkHoverCab plays on hover over desktop-view header navigation links.  In mobile and tablet views CSS transitions were used to mimic the animation on smaller screens.
- The site has a simple grid layout with nested flexbox content.
- A Web Accessibility Compliance Review was undertaken using Chrome Developer Tools' Lighthouse. A .pdf of the original review can be found in the repository under the filename lighthousereport1.pdf. Consequent reports were generated after following suggestions given by the Lighthouse review.  The final Lighthouse report is labeled lighthousereport2.pdf and shows greater accessibility as well as other metrics.

JavaScript Features -

- The mobile version has a hamburger menu drive by hamburgerNav().
- The site uses JavaScript functions to show/hide the different portions of the site as if they were independent pages. These "pages" are navigated using the navigation menu in the header and footer elements.
  + A function was written for each navigation link in the form goPage(), where 'Page' is the name of the link and subsequent "page". For example, goHome(), goContact(), etc.
- An image carousel can be found on the home page that steps through product images at specific timed intervals, ~10 seconds.
  + The function carousel() employs a for loop and if statement to step through the images and set them to display one at a time.
- The contact form has a submit button that uses a simple function onSubmit() to alert the user that the form recognizes the input even if it does not store information.
  + **In-Progress** Currently developing function(s) to validate user input in the form fields.

Stay tuned! More and better things coming!

