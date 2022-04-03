export default function (req, res){
	res.status(200).json({nome: "Os dados que estou a restar"});
	const getUserGeolocationDetails = () => {
        fetch(
            "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
        )
            .then(response => response.json())
            .then(data => console.log(data));
		}
		getUserGeolocationDetails();
    };