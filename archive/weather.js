const axios = require('axios');
module.exports.getWeather = async (city) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=953cc13640c819d49082b534a5115213`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données météorologiques',
            error.message);
    }
};