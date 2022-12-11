import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import App2 from "./App2";

function App() {
    return (
        <BrowserRouter>
            <Router>
                <Switch>
                    <Route path="/Admin" exact>
                        <Admin />
                    </Route>
                    <Route path="/" exact>
                        <App2 />
                    </Route>
                    <Routes>
                        <Route path="/auth" element={<Auth />} />
                    </Routes>
                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default App;
