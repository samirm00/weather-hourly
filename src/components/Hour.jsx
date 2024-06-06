import { Box, Typography, Paper } from '@mui/material';
import { FaLongArrowAltDown, FaLongArrowAltUp, FaEquals } from 'react-icons/fa';
import {
    BsFillCloudRainHeavyFill,
    BsCloudRain,
    BsSun,
    BsEmojiSunglasses
} from 'react-icons/bs';

import PropTypes from 'prop-types';

const Hour = ({ hour }) => {
    const getWeatherIcon = (temp) => {
        if (temp < 10) return <BsFillCloudRainHeavyFill color="black" />;
        if (temp < 15) return <BsCloudRain color="white" />;
        if (temp < 20) return <BsSun color="white" />;
        return <BsEmojiSunglasses color="yellow" />;
    };

    const getTrendIcon = (up) => {
        if (up === 'up') return <FaLongArrowAltUp color="green" />;
        if (up === 'down') return <FaLongArrowAltDown color="red" />;
        if (up === 'equal') return <FaEquals color="white" />;
        return null;
    };

    return (
        <Paper
            elevation={3}
            sx={{
                padding: 2,
                margin: 1,
                color: 'white',
                backgroundColor: '#333333'
            }}
        >
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h6">{hour.hour}</Typography>
                <Box display="flex" alignItems="center" mt={1}>
                    <Box mr={1}>{getWeatherIcon(hour.temp)}</Box>
                    <Box mx={1}>{getTrendIcon(hour.up)}</Box>
                    <Typography variant="body1">{hour.temp}°C</Typography>
                </Box>
            </Box>
        </Paper>
    );
};
Hour.propTypes = {
    hour: PropTypes.object.isRequired
};

export default Hour;
