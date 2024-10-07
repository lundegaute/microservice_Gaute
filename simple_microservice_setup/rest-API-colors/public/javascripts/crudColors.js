
function addColor() {
    const color = document.getElementById("addColor").value;
    if ( !color ) {
        console.log("Color is empty")
    } else {
        axios.post("/", {color: color}).then( (res) => {
            alert(res.data);
            window.location.reload();
        })
    }
}

function deleteColor(color) {
    console.log(color)
    axios.delete("/", {
        data: {
            color: color
        }
    }).then( (res) => {
        alert(res.data);
        window.location.reload();
    })
}

