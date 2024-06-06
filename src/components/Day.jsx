import { Paper, Box, Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

import Hour from './Hour';

const Day = ({ day, dayTemp }) => {
    return (
        <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mb={2}
            >
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="h5" component="span" sx={{ mr: 1 }}>
                        Day: {day}
                    </Typography>
                    <Typography variant="h6" component="span">
                        °C
                    </Typography>
                </Box>
            </Box>
            <Grid container spacing={2}>
                {dayTemp.map((hour, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Hour hour={hour} />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

Day.propTypes = {
    day: PropTypes.string,
    dayTemp: PropTypes.arrayOf(
        PropTypes.shape({
            hour: PropTypes.string.isRequired,
            temp: PropTypes.string.isRequired,
            up: PropTypes.oneOf(['none', 'up', 'down', 'equal'])
        })
    ).isRequired
};

export default Day;
