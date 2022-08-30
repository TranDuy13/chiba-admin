import { DashboardLayout } from "../components/dashboard-layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { SettingsNotifications } from '../components/settings/settings-notifications';
import { SettingsPassword } from '../components/settings/settings-password';
import { Box, Container, Typography } from '@mui/material';

function Setting() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DashboardLayout>
          {
             <Box
             component="main"
             sx={{
               flexGrow: 1,
               py: 8
             }}
           >
             <Container maxWidth="lg">
               <Typography
                 sx={{ mb: 3 }}
                 variant="h4"
               >
                 Settings
               </Typography>
               <SettingsNotifications />
               <Box sx={{ pt: 3 }}>
                 <SettingsPassword />
               </Box>
             </Container>
           </Box>
          }
        </DashboardLayout>
      </ThemeProvider>
    </>
  );
}
export default Setting;
