function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(object){
        appendId(object)
    })
    .catch(function(error){
        appendError(error)
    })
}

function appendId(object){
    document.body.innerHTML = object["id"]
}
function appendError(error){
    document.body.innerHTML = error.message
}