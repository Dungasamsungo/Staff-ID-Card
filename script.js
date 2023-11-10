document.getElementById("btn").addEventListener('submit', subm())

function subm(){

    let first_name = getElementById("first_name").value
    let last_name = getElementById("last_name").value
    let email = getElementById("email").value
    let phone = getElementById("phone").value
    let title = getElementById("title").value
    let id = getElementById("id").value
    
    let card = `Your ID Card is `

    document.getElementById("heading").innerHTML = card
}