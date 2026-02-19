# Major Course Output 1 – Application Development & Emerging Technologies

## Project Overview

This project is a structured landing page developed to showcase all completed activities for the subject **Application Development & Emerging Technologies**. It serves as an academic portfolio, presenting course outputs in an organized format. Each activity is displayed as a card with relevant details and a navigation button linking to the corresponding activity file.  

The project emphasizes modern UI/UX design principles, responsive layout, and accessibility, providing a clean and professional presentation of academic work. A dark mode feature is also included to enhance usability in low-light conditions.

## Features

- **Responsive Design**: The layout adapts seamlessly across desktop, tablet, and mobile devices using flexible grid and flexbox structures.  
- **Hero Section**: Highlights the subject, output type, and student information prominently for clear context.  
- **Activities Section**: Dynamically generated cards display each activity with the following elements:  
  - Title of activity  
  - Description  
  - Date or submission information  
  - Navigate button linking to the corresponding HTML output  
- **About Section**: Describes the purpose and scope of the compiled activities.  
- **Footer**: Provides student information and academic details.  
- **Dark Mode Toggle**: Allows users to switch between light and dark themes for better readability.  
- **FontAwesome Integration**: Icons are used throughout the site for visual clarity and UI enhancement.  

## Project Structure

<pre> ```text project-root/ │ ├─ index.html ├─ css/ │ ├─ style.css │ └─ all.min.css ├─ webfonts/ ├─ js/ │ └─ app.js ├─ activities/ └─ README.md ``` </pre>

## Technologies Used

- **HTML5** – Semantic structure and layout  
- **CSS3** – Styling, responsive design, flexbox, grid, and dark mode implementation  
- **JavaScript (ES6)** – Dynamic generation of activity cards and dark mode toggle  
- **FontAwesome** – Iconography for navigation, buttons, and UI elements  
- **Netlify** – Deployment platform  

## Implementation Details

1. **Dynamic Card Generation**  
   - Activity data is stored as a JavaScript array of objects in `app.js`.  
   - Each object contains `title`, `description`, `date`, and `link`.  
   - Cards are created dynamically and appended to the `#card-container` element.  

2. **Dark Mode Feature**  
   - Dark mode is toggled by adding/removing a `dark-mode` class to the `<body>` element.  
   - CSS rules under the `.dark-mode` selector update colors for hero, cards, sections, and footer.  
   - JavaScript switches the toggle button icon between moon and sun.  

3. **Responsive Layout**  
   - Hero section uses flexbox to arrange text and student info card side by side.  
   - Card grid uses `grid-template-columns` with `auto-fit` and `minmax` for adaptive columns.  
   - Media queries ensure proper spacing and scaling on smaller screens.  

4. **Navigation**  
   - Header includes anchor links to `#home`, `#activities`, and `#about`.  
   - Scroll behavior is smooth for a polished user experience.  

5. **Styling and UI/UX**  
   - Consistent color palette and spacing for readability.  
   - Cards have hover effects and buttons aligned to the bottom using `margin-top: auto`.  
   - Typography and hierarchy emphasize content clarity.  

## Usage

- Open `index.html` in a web browser to view the landing page.  
- Click **View Activities** on each card to navigate to the corresponding activity file.  
- Use the dark mode toggle in the header to switch themes.

