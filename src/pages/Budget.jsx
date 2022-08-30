import { DashboardLayout } from "../components/dashboard-layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { Box, Container, Grid } from "@mui/material";
import { Budget } from "../components/dashboard/budget";
import { LatestOrders } from "../components/dashboard/latest-orders";
import { LatestProducts } from "../components/dashboard/latest-products";
import { Sales } from "../components/dashboard/sales";
import { TasksProgress } from "../components/dashboard/tasks-progress";
import { TotalCustomers } from "../components/dashboard/total-customers";
import { TotalProfit } from "../components/dashboard/total-profit";
import { TrafficByDevice } from "../components/dashboard/traffic-by-device";
function BudgetUser() {
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
                <Grid container spacing={5} sx={{pt:'50px'}}>
                  <Grid item lg={4} sm={6} xl={4} xs={12}>
                    <Budget />
                  </Grid>
                  <Grid item xl={4} lg={4} sm={6} xs={12}>
                    <TasksProgress />
                  </Grid>
                  <Grid item xl={4} lg={4} sm={6} xs={12}>
                    <TotalProfit sx={{ height: "100%" }} />
                  </Grid>
                </Grid>
                <div>âsadasdadakdsakdakdkdkaskdask</div>
                <div>âsadasdadakdsakdakdkdkaskdask</div>
                <div>âsadasdadakdsakdakdkdkaskdask</div>
                <div>âsadasdadakdsakdakdkdkaskdask</div>
                <div>âsadasdadakdsakdakdkdkaskdask</div>
                <div>âsadasdadakdsakdakdkdkaskdask</div>
                <div>âsadasdadakdsakdakdkdkaskdask</div>
                <div>âsadasdadakdsakdakdkdkaskdask</div> 
              </Container>
            </Box>
          }
        </DashboardLayout>
      </ThemeProvider>
    </>
  );
}
export default BudgetUser;
