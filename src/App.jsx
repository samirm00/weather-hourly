import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';

import Header from './components/Header';
import WeatherContainer from './components/WeatherContainer';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

const App = () => {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Header title="Belgium Weather" />
                <Container maxWidth="md" sx={{ marginTop: 4 }}>
                    <WeatherContainer />
                </Container>
            </ThemeProvider>
        </>
    );
};

export default App;
