const apiKey = "6d17222107cb40b3f3c49ebe777bbc58";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=pune";
        async function checkWeather() {
            const response = await fetch(apiUrl + `&appid=${apiKey}`);
            var data = await response.json();
            console.log(data);
        }