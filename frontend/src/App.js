import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import GlobalStyle from "./ui/theme/GlobalStyles";

function App() {
  return (
    <ThemeProvider>
      <TransactionsProvider>
        <GlobalStyle />
        <Home />
      </TransactionsProvider>
    </ThemeProvider>
  );
}

export default App;
