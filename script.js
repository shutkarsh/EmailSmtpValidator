const options = { method: "GET" };

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked");
  const email = document.getElementById("email").value;
  validateEmail(email);
});
const validateEmail = async (email) => {
  url =
    "https://emailvalidation.abstractapi.com/v1/?api_key=0b0643fadea049949cf9ed746b8b553c&email=" +
    email;
  const response = await fetch(url, options);
  const results = await response.json();
  str = ``;
  for (key of Object.keys(results)) {
    str = str + `<div>${key} : ${results[key]}</div>`;
  }
  document.getElementById("com-results").innerHTML = str;
  console.log(results.is_smtp_valid.value);

  if (results.is_smtp_valid.value == true) {
    document.getElementById("result").style.display = "block";
  }
};
