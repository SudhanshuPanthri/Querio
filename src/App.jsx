import { BrowserRouter as Router } from "react-router-dom";
import UserRoutes from "./UserRoutes";
import { UserContextProvider } from "./UserContext";

// axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <UserRoutes />
      </Router>
    </UserContextProvider>
  )
}

export default App;