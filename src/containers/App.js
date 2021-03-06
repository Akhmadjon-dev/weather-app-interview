import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import SectionBlock from "../components/SectionBlock";
import Sidebar from "../components/Sidebar";
import { Main, Section } from "../styles/main";

function App() {
  return (
    <Main>
      <BrowserRouter>
        <Sidebar />
        <Navbar />
        <Section>
          <SectionBlock />
          <Switch>
            {/* {routes.map((item) => {
              return (
                <Route
                  key={item.title}
                  path={item.path}
                  exact={item.exact}
                  component={item.component}
                  render={item.render}
                />
              );
            })} */}
          </Switch>
        </Section>
      </BrowserRouter>
    </Main>
  );
}

export default App;
