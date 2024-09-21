import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Home from './pages/Home';

function App() {
  return (
    <Container maxWidth={"xl"}>
      <Typography variant="h3" component="h1" gutterBottom>
        Cohort 17 - MUI
      </Typography>
      <Home/>
    </Container>
  );
}

export default App;