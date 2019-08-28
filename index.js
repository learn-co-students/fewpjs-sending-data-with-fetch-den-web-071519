// method submitData("Janet", "janetjackson@jmail.com")
function submitData(nameString, emailString) {

  let formData = {
    name: nameString,
    email: emailString
  }

  let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
      .then(response => response.json())
      .then(json => printId(json.id))
      .catch(function(error) {
          alert("Oh dear! Moommmmm HElp!!");
            console.log(error.message);
          });
}

function printId(id) {
  h1 = document.createElement('h1')
  h1.innerText = id
  document.body.appendChild(h1)
}

submitData("Jessup", "jessup@gmail.com")
