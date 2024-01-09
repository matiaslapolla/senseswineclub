import { Grid, ThemeProvider, createTheme } from "@mui/material";
import DefaultFooter from "./components/layout/footer";
import DefaultSidebar from "./components/layout/sidebar";
import DefaultTopBar from "./components/layout/topbar";
import { Route, Routes } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: '#FA3F98',
    },
    secondary: {
      main: '#5603AD',
    },
    highlight1: {
      main: '#C2F8CB',
    },
    highlight2: {
      main: '#B3E9C7',
    },
    error: {
      main: '#FF0000',
    },
    success: {
      main: '#00FF00',
    }
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DefaultTopBar>
          <DefaultFooter>
            <DefaultSidebar>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/brands/:brandId" element={<Brand />} />
              </Routes>
            </DefaultSidebar>
          </DefaultFooter>
        </DefaultTopBar>
      </ThemeProvider>
    </>
  );
}

export default App;
