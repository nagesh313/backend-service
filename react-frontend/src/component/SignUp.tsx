import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from "axios";
import { Form, Formik } from "formik";
import { withSnackbar } from "notistack";
import React from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { failureToast, successToast } from "../util/util";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  lastname: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  username: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});
export function SignUpComponent(props: any) {
  const classes = useStyles();
  const history = useHistory();
  function navigateToLogin() {
    history.push("/signin");
  }
  const signUpSubmit = (values: any) => {
    axios
      .post("/api/auth/signup", { ...values })
      .then((response: any) => {
        props.enqueueSnackbar(response.message, successToast);
        navigateToLogin();
      })
      .catch((reponse: any) => {
        props.enqueueSnackbar(reponse.message, failureToast);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values: any) => {
            signUpSubmit(values);
          }}
        >
          {({ errors, touched, values, handleChange }) => (
            // obj: any
            <Form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="firstname"
                    name="firstname"
                    variant="outlined"
                    fullWidth
                    id="firstname"
                    label="First Name"
                    autoFocus
                    onChange={handleChange}
                    value={values.firstname}
                    error={errors.firstname && touched.firstname ? true : false}
                    helperText={touched.firstname && errors.firstname}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    autoComplete="lastname"
                    onChange={handleChange}
                    value={values.lastname}
                    error={errors.lastname && touched.lastname ? true : false}
                    helperText={touched.lastname && errors.lastname}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                    value={values.email}
                    error={errors.email && touched.email ? true : false}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                    error={errors.username && touched.username ? true : false}
                    helperText={touched.username && errors.username}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    value={values.password}
                    error={errors.password && touched.password ? true : false}
                    helperText={touched.password && errors.password}
                  />
                </Grid>
                {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/#/signIn" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}
export const SignUp = withSnackbar(SignUpComponent);
