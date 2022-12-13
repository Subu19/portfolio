import Routes from "./routes/routes";
import "./components/css/main.css";
import MouseComponent from "./components/contexts/mouseContext";
function App() {
  return (
    <MouseComponent>
      <Routes />
    </MouseComponent>
  );
}

export default App;
