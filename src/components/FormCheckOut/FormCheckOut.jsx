import React from "react";
import { Grid, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const FormCheckOut = ({
  handleChange,
  handleSubmit,
  errors,
  currencies,
  CustomTextField,
  values,
}) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h3>Informacion del cliente</h3>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={12} md={7}>
            <CustomTextField
              id="filled-basic"
              label="Nombre"
              values={values.nombre}
              variant="filled"
              name="nombre"
              color="warning"
              fullWidth
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CustomTextField
              id="filled-basic"
              label="Email"
              values={values.email}
              variant="filled"
              name="email"
              color="warning"
              fullWidth
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CustomTextField
              id="filled-basic"
              label="Telefono"
              values={values.telefono}
              variant="filled"
              name="telefono"
              color="warning"
              fullWidth
              onChange={handleChange}
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
          </Grid>
        </Grid>
        <h3>Direccion del cliente</h3>
        <Grid container rowSpacing={2} flex justifyContent={"center"}>
          <Grid item xs={12} md={7}>
            <CustomTextField
              id="filled-basic"
              label="Direccion de la calle"
              values={values.direccion}
              variant="filled"
              name="direccion"
              color="warning"
              fullWidth
              onChange={handleChange}
              error={errors.direccion ? true : false}
              helperText={errors.direccion}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CustomTextField
              id="filled-basic"
              label="Numero de la calle"
              values={values.numeracion}
              variant="filled"
              name="numeracion"
              color="warning"
              fullWidth
              onChange={handleChange}
              error={errors.numeracion ? true : false}
              helperText={errors.numeracion}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CustomTextField
              id="filled-basic"
              label="Ciudad"
              variant="filled"
              values={values.ciudad}
              name="ciudad"
              color="warning"
              fullWidth
              onChange={handleChange}
              error={errors.ciudad ? true : false}
              helperText={errors.ciudad}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CustomTextField
              id="filled-basic"
              label="Codigo postal"
              values={values.codigoPostal}
              variant="filled"
              name="codigoPostal"
              color="warning"
              fullWidth
              onChange={handleChange}
              error={errors.codigoPostal ? true : false}
              helperText={errors.codigoPostal}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CustomTextField
              id="filled-basic"
              label="Provincia"
              values={values.provincia}
              variant="filled"
              name="provincia"
              color="warning"
              fullWidth
              onChange={handleChange}
              error={errors.provincia ? true : false}
              helperText={errors.provincia}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CustomTextField
              id="filled-basic"
              select
              label="Select"
              values={values.pais}
              variant="filled"
              name="pais"
              color="warning"
              value={values.pais}
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
            </CustomTextField>
          </Grid>
        </Grid>
        <h3>Informacion de pago</h3>
        <Grid container rowSpacing={2} flex justifyContent={"center"}>
          <Grid item xs={12} md={7}>
            <CustomTextField
              id="filled-basic"
              label="Nombre titular"
              values={values.titular}
              variant="filled"
              name="nombreTitular"
              color="warning"
              fullWidth
              onChange={handleChange}
              error={errors.nombreTitular ? true : false}
              helperText={errors.nombreTitular}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CustomTextField
              id="filled-basic"
              label="Numero tarjeta de credito"
              values={values.numeroTarjeta}
              variant="filled"
              name="numeroTarjeta"
              color="warning"
              fullWidth
              onChange={handleChange}
              error={errors.numeroTarjeta ? true : false}
              helperText={errors.numeroTarjeta}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CustomTextField
              id="filled-basic"
              label="Numero de expiracion"
              values={values.numeroExpiracion}
              variant="filled"
              name="numeroExpiracion"
              color="warning"
              fullWidth
              onChange={handleChange}
              error={errors.numeroExpiracion ? true : false}
              helperText={errors.numeroExpiracion}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CustomTextField
              id="filled-basic"
              label="Codigo de seguridad"
              values={values.codigoSeguridad}
              variant="filled"
              name="codigoSeguridad"
              color="warning"
              fullWidth
              onChange={handleChange}
              error={errors.codigoSeguridad ? true : false}
              helperText={errors.codigoSeguridad}
            />
            <Grid item xs={12} md={7}>
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
