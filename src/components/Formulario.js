import { Box, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";

export default function FormularioTareas(props) {
    const [input, setInput] = useState('');

    function handleNuevaTarea(event){
        event.preventDefault();
        props.handleNuevaTarea(input);
        setInput('');
    }

    function handleChange(event){
        const change = event.target.value;
        setInput(change);
    }
  
    return (
    <Box component="form" onSubmit={handleNuevaTarea}>
      <FormControl sx={{ width: "100%" }}>
        <TextField
          inputProps={{ inputMode: "text" }}
          id="tarea"
          label="Agregar Nueva Tarea"
          variant="filled"
          value={input}
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  );
}
