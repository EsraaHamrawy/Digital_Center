import { CssBaseline } from "@mui/material";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <>
      <CssBaseline /> {/* css reset with matrial ui */}
      <AppRoutes />
    </>
  );
}

export default App;
