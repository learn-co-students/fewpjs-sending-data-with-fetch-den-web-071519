// Add your code here

function submitData(name, email) {
    
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify( {
            name, 
            email
        })
    }
    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json()
        })
        .then(function(object) {
            document.body.innerHTML = object["id"]
        })
        .catch(function(error) {
            
            document.body.innerHTML = error.message
        })
}











// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// }

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// }

// let dogURL = "http://localhost:3000/dogs"

// fetch(dogURL, configObj)
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(object) {
//         console.log(object)
//     })
//     .catch(function(error) {
//         alert("uh oh")
//         console.log(error.message)
//     })