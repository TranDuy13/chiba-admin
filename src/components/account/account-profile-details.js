import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";

const states = [
  {
    value: "Ho Chi Minh city, Viet Nam",
    label: "Ho Chi Minh ",
  },
  {
    value: "Da Nang city, Viet Nam",
    label: "Da Nang",
  },
  {
    value: "Ha Noi capital, Viet Nam",
    label: "Ha Noi",
  },
];

export const AccountProfileDetails = (props) => {
  const { user } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      name: user.data.admin.name,
      phone: user.data.admin.phone,
      address: user.data.admin.address,
      email: user.data.admin.email,
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      name: Yup.string().max(255).required("Name is required"),
      phone: Yup.number().required("Phone is required"),
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit} >
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                error={Boolean(formik.touched.name && formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                label="Name"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                required
                // defaultValue={user.data.admin.name}
                value={formik.values.name}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                error={Boolean(formik.touched.phone && formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                label="Phone"
                name="phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                required
                // defaultValue={user.data.admin.name}
                value={formik.values.phone}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                error={Boolean(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                name="email"
                type="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                required
                value={formik.values.email}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select State"
                name="address"
                onChange={formik.handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={formik.values.address}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained" type="submit">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
