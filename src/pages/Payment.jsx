import { DashboardLayout } from "../components/dashboard-layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { Box, Container, Typography } from "@mui/material";
import { PayMentStatus } from "../components/dashboard/payment";

function Payment() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DashboardLayout>
          {
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                py: 1,
              }}
            >
              <Container maxWidth={false}>
                <PayMentStatus />
              </Container>
            </Box>
          }
        </DashboardLayout>
      </ThemeProvider>
    </>
  );
}
export default Payment;
