import React from "react";
import { Grid, TextField, Button } from "@mui/material";

const FormCheckOut = ({ handleChange, handleSubmit, errors }) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Grid
          m={2}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          flex
          justifyContent={"center"}
        >
          <Grid item>
            <TextField
              id="filled-basic"
              label="Nombre"
              variant="filled"
              name="nombre"
              color="warning"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item>
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              name="email"
              color="warning"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item>
            <TextField
              id="filled-basic"
              label="Telefono"
              variant="filled"
              name="telefono"
              color="warning"
              onChange={handleChange}
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
          </Grid>
          <Grid item>
            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              name="password"
              color="warning"
              onChange={handleChange}
              error={errors.password ? true : false}
              helperText={errors.password}
            />
          </Grid>
          <Grid>
            <Button type="submit" variant="outlined" color="warning">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckOut;
