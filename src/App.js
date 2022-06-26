import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import SearchPage from "./pages/SearchPage";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">Countrify</Navbar.Brand>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route
            path="/countryDetails/:name"
            element={<CountryDetailsPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
