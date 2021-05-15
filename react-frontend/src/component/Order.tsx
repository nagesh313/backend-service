import {
  Box,
  Button,
  Collapse,
  Grid,
  Icon,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import { withSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { failureToast } from "../util/util";
import { CreateNewOrderDialog } from "./CreateNewOrderDialog";
import Title from "./Title";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});
function Row(props: any) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.id}</TableCell>
        <TableCell align="center">{row.creationDate}</TableCell>
        <TableCell align="center">{row.orderName}</TableCell>
        <TableCell align="center">{row.products?.length}</TableCell>
        {props.admin && (
          <TableCell align="center">{row.user.username}</TableCell>
        )}
        {props.admin && <TableCell align="center">{row.user.email}</TableCell>}
        {props.admin && (
          <TableCell align="center">{row.user.firstname}</TableCell>
        )}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Products
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((product: any) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.id}</TableCell>
                      <TableCell align="center">{product.name}</TableCell>
                      <TableCell align="center">{product.quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const OrderListComponent = (props: any) => {
  const [orderList, setOrderList] = useState<any>([]);
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  const admin = user.roles.includes("ROLE_ADMIN");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    fetchOrderList();
  };
  const fetchOrderList = () => {
    const url = admin ? "/api/v1/order/all" : "/api/v1/order/user/" + user.id;
    axios
      .get(url)
      .then((response: any) => {
        setOrderList(response.data);
      })
      .catch((reponse: any) => {
        props.enqueueSnackbar(reponse.error, failureToast);
      });
  };
  useEffect(() => {
    fetchOrderList();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      <CreateNewOrderDialog
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      ></CreateNewOrderDialog>
      <Grid container>
        <Grid xs={9} item>
          <Title>{admin ? "All Orders" : "Orders"}</Title>
        </Grid>
        <Grid xs={3} item style={{ textAlign: "right" }}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
          >
            <Icon>add</Icon>
          </Button>
        </Grid>
      </Grid>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>&nbsp;</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Creation Date</TableCell>
            <TableCell align="center">Order Name</TableCell>
            <TableCell align="center">Products Count</TableCell>
            {admin && <TableCell align="center">Username</TableCell>}
            {admin && <TableCell align="center">User Email</TableCell>}
            {admin && <TableCell align="center">User First Name</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {orderList.map((row: any) => (
            <Row key={row.id} row={row} admin={admin} />
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};
export const Orders = withSnackbar(OrderListComponent);
