import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import MyRoutes from "./Router/config";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MyRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
