import AppRoutes from "./routes/AppRoutes";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
