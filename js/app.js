const activities = [
  {
    title: "Activity 1 - HTML Fundamentals",
    description: "Created a structured webpage using semantic HTML elements.",
    date: "January 15, 2026",
    link: "activities/activity1.html",
  },
  {
    title: "Activity 2 - Inline CSS",
    description: "Enhanced the structured HTML webpage by applying inline CSS styles to customize layout, colors, typography, and overall visual presentation.",
    date: "February 16, 2026",
    link: "activities/activity2.html",
  },
  {
    title: "Activity 3 - TEST",
    description: "Test Anay",
    date: "January 30, 2026",
    link: "activities/activity3.html",
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

const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const icon = darkModeBtn.querySelector('i');
  if(document.body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

