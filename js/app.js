const activities = [
  {
    title: "Activity 1 - HTML Fundamentals",
    description: "Created a structured webpage using semantic HTML elements.",
    date: "January 15, 2026",
    link: "activities/activity1/activity1.html",
  },
  {
    title: "Activity 2 - Inline CSS",
    description:
      "Enhanced the structured HTML webpage by applying inline CSS styles to customize layout, colors, typography, and overall visual presentation.",
    date: "February 16, 2026",
    link: "activities/activity2/activity2.html",
  },
  {
    title: "Activity 3 - Internal & External CSS",
    description:
      "Redesigned the original webpage by applying internal and external CSS using element, class, and id selectors to improve layout, styling, and user interface design.",
    date: "February 19, 2026",
    link: "activities/activity3/activity3.html",
  },
  {
    title: "Activity 4 - Table List",
    description:
      "Created a structured table list using HTML table elements including thead, tbody, rows, and columns.",
    date: "February 24, 2026",
    link: "activities/activity4/activity4.html",
  },
  {
    title: "Activity 5 - Interactive Portfolio Website",
    description:
      "Developed a modern, interactive portfolio webpage showcasing projects, skills, and profile information using HTML, CSS, and JavaScript.",
    date: "March 3, 2026",
    link: "activities/activity5/activity5.html",
  },
   {
    title: "Activity 6 - Personal Information Form",
    description:
      "Built an interactive form using HTML, CSS Grid, and JavaScript that collects user information and dynamically displays the submitted data on the page.",
    date: "March 10, 2026",
    link: "activities/activity6/activity6.html",
  },
];

const container = document.getElementById("card-container");

activities.forEach((activity) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
        <h3>${activity.title}</h3>
        <p>${activity.description}</p>
        <div class="date">
            <i class="fas fa-calendar-alt"></i> ${activity.date}
        </div>
        <button onclick="window.location.href='${activity.link}'">
            <i class="fas fa-arrow-right"></i> View Activity
        </button>
    `;

  container.appendChild(card);
});

const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const icon = darkModeButton.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});
