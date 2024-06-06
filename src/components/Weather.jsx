import { Container, Box } from '@mui/material';
import PropTypes from 'prop-types';

import Day from './Day';

import organizeWeather from '../utils/organizeWeather';

const Weather = ({ weather }) => {
    const days = organizeWeather(weather);

    return (
        <Container maxWidth="md" sx={{ marginTop: 4 }}>
            {Object.entries(days).map(([day, hours], index) => (
                <Box key={index} mb={4}>
                    <Day day={day} dayTemp={hours} />
                </Box>
            ))}
        </Container>
    );
};

Weather.propTypes = {
    weather: PropTypes.object.isRequired
};

export default Weather;
