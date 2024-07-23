import FormCheckOut from "./FormCheckOut";
import { useFormik } from "formik";
// el import de yup es diferente al resto
import * as Yup from "yup";
// importo todo (*) con el nombre (as) Yup desde "yup"

const FormCheckOutContainer = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
      password: "",
    },

    onSubmit: (data) => {
      console.log(data);
    },

    validationSchema: Yup.object().shape({
      nombre: Yup.string().required("Este campo es Obligatorio"),
      email: Yup.string()
        .required("Este campo es Obligatorio")
        .email("Debe ingresar un email valido"),
      telefono: Yup.number().required("Este campo es Obligatorio"),
      password: Yup.string()
        .required("Este campo es Obligatorio")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/
        ),
      confirmPassword: Yup.string()
        .required("Este campo es Obligatorio")
        .oneOf([Yup.ref("password")], "la contraseña no coincide"),
    }),
    validateOnChange: false, // de esta forma evito que se valide cada vez que escribo y me tire error todo el tiempo
  });

  return (
    <div>
      <FormCheckOut
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default FormCheckOutContainer;
