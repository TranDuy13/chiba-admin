
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  TextField,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Register = () => {
//   const router = useRouter();
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       firstName: '',
//       lastName: '',
//       password: '',
//       policy: false
//     },
//     validationSchema: Yup.object({
//       email: Yup
//         .string()
//         .email(
//           'Must be a valid email')
//         .max(255)
//         .required(
//           'Email is required'),
//       firstName: Yup
//         .string()
//         .max(255)
//         .required(
//           'First name is required'),
//       lastName: Yup
//         .string()
//         .max(255)
//         .required(
//           'Last name is required'),
//       password: Yup
//         .string()
//         .max(255)
//         .required(
//           'Password is required'),
//       policy: Yup
//         .boolean()
//         .oneOf(
//           [true],
//           'This field must be checked'
//         )
//     }),
//     onSubmit: () => {
//       router.push('/');
//     }
//   });

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Dashboard
            </Button>

          <form>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Create a new account
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Use your email to create a new account
              </Typography>
            </Box>
            <TextField
            //   error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
            //   helperText={formik.touched.firstName && formik.errors.firstName}
              label="First Name"
              margin="normal"
              name="firstName"
            //   onBlur={formik.handleBlur}
            //   onChange={formik.handleChange}
            //   value={formik.values.firstName}
              variant="outlined"
            />
            <TextField
            //   error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
            //   helperText={formik.touched.lastName && formik.errors.lastName}
              label="Last Name"
              margin="normal"
              name="lastName"
            //   onBlur={formik.handleBlur}
            //   onChange={formik.handleChange}
            //   value={formik.values.lastName}
              variant="outlined"
            />
            <TextField
            //   error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
            //   helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
            //   onBlur={formik.handleBlur}
            //   onChange={formik.handleChange}
              type="email"
            //   value={formik.values.email}
              variant="outlined"
            />
            <TextField
            //   error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
            //   helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
            //   onBlur={formik.handleBlur}
            //   onChange={formik.handleChange}
              type="password"
            //   value={formik.values.password}
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                // checked={formik.values.policy}
                name="policy"
                // onChange={formik.handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                I have read the
                {' '}

                  <Link to='/'
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                    style={{ textDecoration: 'none' }}
                  >
                    Terms and Conditions
                  </Link>
              </Typography>
            </Box>
            {/* {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>
            )} */}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                // disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up Now
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Have an account?
              {' '}
                <Link
                  variant="subtitle2"
                  underline="hover"
                  style={{ textDecoration: 'none' }}
                  to='/'
                >
                  Sign In
                </Link>
    
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
