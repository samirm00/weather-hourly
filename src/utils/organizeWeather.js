const organizeWeather = (weather) => {
    const { time, temperature_2m } = weather.hourly;
    const days = {};

    let oldTemp;
    time.forEach((hour, index) => {
        const now = new Date(hour);

        // Day
        const day = now.getDate();
        let hourOfDay = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        hourOfDay = hourOfDay < 10 ? `0${hourOfDay}` : hourOfDay;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        const formattedHour = `${hourOfDay} : ${minutes} : ${seconds}`;
        const temp = temperature_2m[index];
        const formattedTemp = temp.toFixed(1);

        let arrow;
        if (oldTemp) {
            if (oldTemp > temp) {
                arrow = 'down';
            } else if (oldTemp < temp) {
                arrow = 'up';
            } else {
                arrow = 'equal';
            }
        } else {
            arrow = 'none';
        }

        const hourAndTemp = {
            hour: formattedHour,
            temp: formattedTemp,
            arrow: arrow
        };

        if (!days[day]) {
            days[day] = [];
        } else {
            days[day].push(hourAndTemp);
        }

        oldTemp = temp;
    });

    return days;
};

export default organizeWeather;
