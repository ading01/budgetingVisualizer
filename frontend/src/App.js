import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { ThemeProvider } from "./contexts/ThemeContext";
import GlobalStyle from "./ui/theme/GlobalStyles";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
