
function addCity() {
    const city = document.getElementById("addCity").value;
    if ( !city ) {
        console.log("No city entered!")
    } else {
        axios.post("/", {city: city}).then( (res) => {
            alert(res.data);
            window.location.reload();
        })
    }
}

function deleteCity(city) {
    axios.delete("/", {
        data: {
            city: city
        }
    }).then( (res) => {
        alert(res.data);
        window.location.reload();
    })
}