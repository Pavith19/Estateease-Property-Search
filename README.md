# EstateEase Property Search Application 🏠🔍

This is a client-side web application built with React.js that allows users to search for properties based on various criteria. It also provides detailed property information, a favourites list, and is designed to be responsive across devices.

## Project Overview 🌐

EstateEase is a property search application that enables users to easily browse and filter through property listings, save favorites, and explore detailed property information. It provides a seamless experience for users looking for their next home or investment property, built to demonstrate proficiency in HTML5, React JS, and responsive web design practices.

## Key Features 🌟

*   **Comprehensive Search** 🔎: Search properties by type (house, flat, any), price range, number of bedrooms, date added, and postcode area.
*   **Enhanced Form** 📋: Uses React Widgets for consistent, reliable, and accessible form elements.
*   **Detailed Results** 🏡: Displays search results in an effective and pleasant manner, including a picture, short description, and price.
*   **Property Details Page** 📄: Each property has a dedicated page with a large image, thumbnail images, a short description, a long description, a floor plan, and Google Maps integration.
*   **React Tabs** 🗂: Uses React Tabs to display the property description, floor plan, and map.
*   **Favorites** ❤️: Allows users to save properties to a favorites list via drag and drop or a "favorite" button. The user can also remove properties from the favorites list or clear all of them at once. The favourites are stored in the browser's local storage.
*   **Responsive Design** 📱💻: Implements a responsive layout using hand-written media queries and flex/grid layout for both the search page and the property details page.
*   **Aesthetic Design** 🎨: The design has a clear visual hierarchy, proper alignment and grouping, a consistent color scheme, and effective use of visual elements.
*   **Security** 🔒: Includes client-side security measures with HTML encoding to protect against attacks.
*   **Contact Us Form** ✉️: Includes a contact form for users to send messages to EstateEase, which uses Bootstrap for the form elements.
*  **Service Banner** 🏷️: A banner describing the services that this website provides, and also uses bootstrap for responsiveness.
*   **Fully Client-Side** 🌐: The application is designed to run completely on the client-side (no server-side code needed) and can be run directly in a browser.
*   **JSON Data** 📑: Uses a JSON file to store property data that is then rendered by the application.
*   **Attractive Footer** 🔽: Stylish footer to provide company information, social media links, copyright, and contact information.

## Technologies Used ⚙️

*   **React.js** ⚛️: For building the user interface and managing component state and lifecycles.
*   **React Router DOM** 🛣️: For handling navigation between different pages of the application.
*   **React Widgets** 🧩: For enhanced form input components.
*   **Bootstrap** 💼: For responsive layout and styling.
*   **React Tabs** 🗂️: For creating tabbed content in the property details.
*   **React Draggable** 🔄: For drag and drop functionality.
*  **@fortawesome/free-solid-svg-icons, @fortawesome/free-regular-svg-icons, @fortawesome/free-brands-svg-icons and @fortawesome/react-fontawesome** 🎨: for rendering icons.
*   **HTML5** 🧑‍💻: For the basic structure of the web pages.
*   **CSS3** 🎨: For the general styling of the components, layouts, and providing visual appeal for the project.

## How to Run the Application 🚀

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/estateease-property-search.git
    cd estateease-property-search
    ```
    *   (Replace `your-username` with your actual GitHub username)
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Start the Development Server:**
    ```bash
    npm start
    ```
4.  **Open in Browser:** Open your web browser and go to `http://localhost:3000`.

## Project Structure 📁

```
property-search/
├── node_modules/
├── public/
│   ├── assets/
│   │   ├── ...image files here...
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PropertyCard.js
│   │   ├── PropertyDetails.js
│   │   ├── SearchForm.js
│   │   ├── ImageCarousel.js
│   │   ├── FavoritesList.js
│   │   ├── Tabs.js
│   │   ├── Map.js
│   │   ├── Footer.js
│   │   └── ContactForm.js
│   ├── data/
│   │   └── properties.json
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
```
## Known issues ⚠️
*   Browser extensions such as ad-blockers may prevent loading of the Google Map or cause other issues, as these are not coding errors. Please try again by disabling those.
*   The search functionality relies on text-based searching so exact terms will return the best results.
  
## 📝 License

This project is licensed under the MIT License.

<h3 align="center">Connect with me:</h3>
<p align="center">
  <a href="https://instagram.com/_mr_2001__" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="_mr_2001__" height="30" width="40" /></a>
  <a href="https://linkedin.com/in/www.linkedin.com/in/pavith-bambaravanage-465300293" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="pavith-bambaravanage-465300293" height="25" width="35" /></a>
  <a href="https://www.hackerrank.com/@pavith_db" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="@pavith_db" height="40" width="45" /></a>
  <a href="https://www.leetcode.com/pavith_db" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="pavith_db" height="30" width="40" /></a>
  <a href="mailto:pavithd2020@gmail.com" target="blank"><img align="center" src="https://github.com/TheDudeThatCode/TheDudeThatCode/raw/master/Assets/Gmail.svg" alt="pavithd2020@gmail.com" height="30" width="40" /></a>
</p>
