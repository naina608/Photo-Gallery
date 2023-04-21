import Search from "./components/search/Search";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
function App() {
  return (
    <div className="App">
    <MuiThemeProvider>
      <Search />
      </MuiThemeProvider>
      </div>
  );
}
export default App;
