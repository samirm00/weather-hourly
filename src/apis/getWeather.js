import axios from 'axios';

const getWeather = async () => {
    try {
        const res = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=50.8503&longitude=4.3517&hourly=temperature_2m`
        );

        if (res.status !== 200) {
            throw new Error(`No data available with status ${res.status}`);
        }
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

export default getWeather;
