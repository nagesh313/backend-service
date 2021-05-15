import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { Form, Formik } from "formik";
import { withSnackbar } from "notistack";
import React, { useState } from "react";
import { failureToast, successToast } from "../util/util";
const CreateNewOrderDialogComponent = (props: any) => {
  const [productList, setProductList] = useState<any>([
    { name: "", quantity: 0 },
  ]);
  const addMoreProduts = () => {
    const newProduct = { name: "", quantity: 0 };
    const newProductList = [...productList, newProduct];
    setProductList(newProductList);
  };
  const submitNewOrder = (data: any) => {
    const cloneData: any = { ...data };
    const products: any = [];
    const payload: any = {
      orderName: data.orderName,
      expectedDateOfArrival: data.expectedDateOfArrival,
    };
    delete cloneData.orderName;
    delete cloneData.expectedDateOfArrival;
    Object.keys(cloneData).forEach((d) => {
      if (d.startsWith("name")) {
        if (!products[d.split("name")[1]]) {
          products[d.split("name")[1]] = { name: "", quantity: "" };
        }
        products[d.split("name")[1]].name = cloneData[d];
      } else if (d.startsWith("quantity")) {
        if (!products[d.split("quantity")[1]]) {
          products[d.split("quantity")[1]] = { name: "", quantity: "" };
        }
        products[d.split("quantity")[1]].quantity = cloneData[d];
      }
    });
    payload.products = products;
    const user = JSON.parse(sessionStorage.getItem("user") || "{}");

    axios
      .post("/api/v1/order/create/" + user.id, payload)
      .then((response: any) => {
        console.log(response);
        props.enqueueSnackbar("Order Saved Successfully", successToast);
        setProductList([]);
        props.handleClose();
      })
      .catch((reponse: any) => {
        props.enqueueSnackbar(reponse.error, failureToast);
      });
  };
  const values: any = {};
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create New Order Form</DialogTitle>
        <Formik
          initialValues={values}
          // validationSchema={SignInSchema}
          onSubmit={(values: any) => {
            submitNewOrder(values);
          }}
        >
          {({ errors, touched, values, handleChange }) => (
            <Form>
              <DialogContent>
                <Grid container>
                  <Grid xs={6} item>
                    <TextField
                      autoFocus
                      name="orderName"
                      margin="dense"
                      id="orderName"
                      label="Order Name"
                      onChange={handleChange}
                      value={values.orderName}
                    />{" "}
                  </Grid>
                  <Grid xs={6} item>
                    <TextField
                      id="date"
                      label="Get Order on"
                      margin="dense"
                      type="date"
                      name="expectedDateOfArrival"
                      defaultValue="2017-05-24"
                      onChange={handleChange}
                      value={values.expectedDateOfArrival}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>
                {productList.map((product: any, index: any) => {
                  return (
                    <Grid container key={index}>
                      <Grid xs={6} item>
                        <FormControl>
                          <InputLabel></InputLabel>
                          <Select
                            fullWidth
                            margin="dense"
                            style={{ minWidth: "150px" }}
                            name={"name" + index}
                            onChange={handleChange}
                            value={values["name" + index]}
                            //   label="Product"
                            //   value={age}
                            //   onChange={handleChange}
                          >
                            {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
                            <MenuItem value={"Product 1"}>Product 1</MenuItem>
                            <MenuItem value={"Product 2"}>Product 2</MenuItem>
                            <MenuItem value={"Product 3"}>Product 3</MenuItem>
                            <MenuItem value={"Product 4"}>Product 4</MenuItem>
                            <MenuItem value={"Product 5"}>Product 5</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid xs={6} item>
                        <FormControl size="small">
                          <TextField
                            name={"quantity" + index}
                            label="Quantity"
                            margin="dense"
                            type="number"
                            onChange={handleChange}
                            value={values["quantity" + index]}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  );
                })}
                <Grid>
                  <Button onClick={addMoreProduts} color="primary" fullWidth>
                    Add More Products
                  </Button>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                  Cancel
                </Button>
                <Button color="primary" type="submit">
                  Save
                </Button>
              </DialogActions>{" "}
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};
export const CreateNewOrderDialog = withSnackbar(CreateNewOrderDialogComponent);
