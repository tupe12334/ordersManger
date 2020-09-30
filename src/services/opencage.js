const apikey = "d94a707655c249319150e9d8a310e754" // finish
const secondapikey = "95467a73c61a4a8bb016e6f139edec2d"

export default function getGeoCoding(params) {
    var latLng = [0, 0]
    console.log("params: ");
    console.log(params);

    // from local server
    fetch("https://localhost:44308/api/books")
        .then(response => response.json())
        .then(data => {
            console.log('data');

            if (data.results[0] !== null || data.results[0] !== undefined) {
                //console.log(data.results[0].geometry);
                latLng[0] = data[0]
                latLng[1] = data[1]
            }
        })
    console.log(latLng);
    if (latLng !== null) {
        return latLng
    }
    //from real api
    /*
        var request = "https://api.opencagedata.com/geocode/v1/json?q=" + params + "&key=" + secondapikey
        fetch(request)
            .then(response => response.json())
            .then(data => {
                console.log('data');
                console.log(data);
                if (data.results[0] !== null || data.results[0] !== undefined) {
                    //console.log(data.results[0].geometry);
                    latLng[0] = data.results[0].geometry.lat
                    latLng[1] = data.results[0].geometry.lat
                }
            })
        console.log(latLng);
        if (latLng !== null) {
            return latLng
        }*/
}