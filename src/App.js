import { useRoutes } from "react-router-dom";
import routes from "./Routes/routes"; // Correct the import path
import "./App.css";

function App() {
  return (
<>
{useRoutes(routes)} {/* Use Routes */}
</>
  );
}

export default App;
