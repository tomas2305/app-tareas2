import "./App.css";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import FormularioTareas from "./components/Formulario";
import { useState } from "react";
import Tarea from "./components/Tarea";
import { v4 as uuidv4 } from "uuid"; //import

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body{
          background: rgb(48,48,48);
background: linear-gradient(0deg, rgba(48,48,48,1) 0%, rgba(41,41,41,1) 100%);
          background-size: cover;
          background-repeat: no-repeat;
          min-height:100vh;
        }
      `,
    },
  },
});

function App() {
  const [tareas, setTareas] = useState([]);

  function agregarNuevaTarea(tarea) {
    setTareas([...tareas, tarea]);
  }

  function eliminarTarea(tareaABorrar) {
    setTareas(tareas.filter((tarea) => tarea !== tareaABorrar));
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className="App">
        <Typography variant="h3" my={4}>
          App Tareas
        </Typography>
        <FormularioTareas handleNuevaTarea={agregarNuevaTarea} />
        {tareas.map((tarea) => (
          <Tarea handleBorrarTarea={eliminarTarea} key={uuidv4()}>
            {tarea}
          </Tarea>
        ))}
      </Container>
    </ThemeProvider>
  );
}

export default App;
