import React from "react";
import { Grid, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

const FormCheckOut = ({ handleChange, handleSubmit, errors, currencies }) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h3>Informacion del cliente</h3>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={9} md={7}>
            <TextField
              id="filled-basic"
              label="Nombre"
              variant="filled"
              name="nombre"
              fullWidth
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={9} md={7}>
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              name="email"
              fullWidth
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={9} md={7}>
            <TextField
              id="filled-basic"
              label="Telefono"
              variant="filled"
              name="telefono"
              fullWidth
              onChange={handleChange}
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
          </Grid>
        </Grid>
        <h3>Direccion del cliente</h3>
        <Grid container rowSpacing={2} flex justifyContent={"center"}>
          <Grid item xs={9} md={7}>
            <TextField
              id="filled-basic"
              label="Direccion de la calle"
              variant="filled"
              name="direccion"
              fullWidth
              onChange={handleChange}
              error={errors.direccion ? true : false}
              helperText={errors.direccion}
            />
          </Grid>
          <Grid item xs={9} md={7}>
            <TextField
              id="filled-basic"
              label="Numero de la calle"
              variant="filled"
              name="numeracion"
              fullWidth
              onChange={handleChange}
              error={errors.numeracion ? true : false}
              helperText={errors.numeracion}
            />
          </Grid>
          <Grid item xs={9} md={7}>
            <TextField
              id="filled-basic"
              label="Ciudad"
              variant="filled"
              name="ciudad"
              fullWidth
              onChange={handleChange}
              error={errors.ciudad ? true : false}
              helperText={errors.ciudad}
            />
          </Grid>
          <Grid item xs={9} md={7}>
            <TextField
              id="filled-basic"
              label="Codigo postal"
              variant="filled"
              name="codigoPostal"
              fullWidth
              onChange={handleChange}
              error={errors.codigoPostal ? true : false}
              helperText={errors.codigoPostal}
            />
          </Grid>
          <Grid item xs={9} md={7}>
            <TextField
              id="filled-basic"
              label="Provincia"
              variant="filled"
              name="provincia"
              fullWidth
              onChange={handleChange}
              error={errors.provincia ? true : false}
              helperText={errors.provincia}
            />
          </Grid>
          <Grid item xs={9} md={7}>
            <TextField
              id="filled-basic"
              select
              label="Select"
              variant="filled"
              name="pais"
              fullWidth
              onChange={handleChange}
              error={errors.pais ? true : false}
              helperText={errors.pais}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <h3>Informacion de pago</h3>
        <Grid container rowSpacing={2} flex justifyContent={"center"}>
          <Grid item xs={9} md={7}>
            <TextField
              id="filled-basic"
              label="Nombre titular"
              variant="filled"
              name="nombreTitular"
              fullWidth
              onChange={handleChange}
              error={errors.nombreTitular ? true : false}
              helperText={errors.nombreTitular}
            />
          </Grid>
          <Grid item xs={9} md={7}>
            <TextField
              id="filled-basic"
              label="Numero tarjeta de credito"
              variant="filled"
              name="numeroTarjeta"
              fullWidth
              onChange={handleChange}
              error={errors.numeroTarjeta ? true : false}
              helperText={errors.numeroTarjeta}
            />
          </Grid>
          <Grid item xs={9} md={7}>
            <TextField
              id="filled-basic"
              label="Numero de expiracion AA-MM"
              variant="filled"
              name="numeroExpiracion"
              fullWidth
              onChange={handleChange}
              error={errors.numeroExpiracion ? true : false}
              helperText={errors.numeroExpiracion}
            />
          </Grid>
          <Grid item xs={9} md={7}>
            <TextField
              id="filled-basic"
              label="Codigo de seguridad"
              variant="filled"
              name="codigoSeguridad"
              fullWidth
              onChange={handleChange}
              error={errors.codigoSeguridad ? true : false}
              helperText={errors.codigoSeguridad}
            />
            <Grid item xs={9} md={7}>
              <Button
                type="submit"
                variant="outlined"
                color="inherit"
                fullWidth
              >
                Confirmar compra
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckOut;
