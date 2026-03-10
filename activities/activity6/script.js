document.addEventListener("DOMContentLoaded", function () {
  const formSubmit = document.querySelector("form");
  const dataContent = document.querySelector(".dataContent");

  const name = document.getElementById("name");
  const age = document.getElementById("age");
  const address = document.getElementById("address");

  formSubmit.addEventListener("submit", function (event) {
    event.preventDefault();

    dataContent.innerHTML = `
            <h1 class="titleContent">Personal Information</h1>
            <p><strong>Name:</strong> ${name.value}</p>
            <p><strong>Age:</strong> ${age.value}</p>
            <p><strong>Address:</strong> ${address.value}</p>
        `;

    name.value = "";
    age.value = "";
    address.value = "";
  });
});
