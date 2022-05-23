import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PageRenderer from "./utils/PageRenderer";

function App() {
    return (
        <Router>
            <input type="checkbox" id="theme" />
            <div className="App">
                <div className="main">
                    <Routes>
                        <Route path=":page" element={<PageRenderer />} />
                        <Route path=":page/:id" element={<PageRenderer />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
