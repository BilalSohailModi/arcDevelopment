import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import theme from "./ui/theme";
import LandingPage from "./ui/LandingPage";

import Header from "./ui/header";
import Footer from "./ui/footer";
function App() {
  const [value, setValue] = useState(0);
  const [selectIndex, setSelectIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectIndex={selectIndex}
          setSelectIndex={setSelectIndex}
        />
        <Switch>
          <Route exact path="/" component={() => <LandingPage />} />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>The Revolution</div>}
          />
          <Route exact path="/aboutUs" component={() => <div>About Us</div>} />
          <Route
            exact
            path="/contactUs"
            component={() => <div>Contact Us</div>}
          />
          <Route
            exact
            path="/customsoftware"
            component={() => <div>custom Software</div>}
          />
          <Route
            exact
            path="/mobileapp"
            component={() => <div>Mobile App</div>}
          />
          <Route exact path="/website" component={() => <div>Website</div>} />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectIndex={selectIndex}
          setSelectIndex={setSelectIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
