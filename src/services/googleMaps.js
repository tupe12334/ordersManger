import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyBCVOA12VNJjoASb-6SP9mFzsOVHidxb0s");
Geocode.setLanguage("iw");
Geocode.setRegion("il");
Geocode.enableDebug();

var temp
Geocode.fromAddress("הגליל 13 קרית אתא").then(
    response => {
        console.log(response);
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        temp = response
    },
    error => {
        console.error(error);
    }
);

export default Geocode