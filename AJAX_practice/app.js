let button = document.getElementById("btn")
let txtDiv = document.getElementById("txtDiv")

button.onclick = () => {
    loadContent()
}

function loadContent () {
    // Create xhr object
    let xhr = new XMLHttpRequest();

    // OPEN - type of request, url/file name, async or not
    xhr.open("GET", "sample.txt", true)

    xhr.onload = function () {
        if (this.status == 200) {
            let response = this.responseText
            console.log(response)
            txtDiv.append(response)
        }
    }
    // Sends request
    xhr.send();
}