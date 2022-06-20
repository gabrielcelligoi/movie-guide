import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify";

// Toastfy stylesheet
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      {/* configuring the ToastContainer to close in 3s */}
      <ToastContainer autoClose={3000}/>
      <RoutesApp/>
    </div>
  );
}

export default App;
