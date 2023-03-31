import HomePage from "./pages/Home.page";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const App = () => {
    return (
        <BrowserRouter>
<Routes>
    <Route path={'/'} element={<HomePage/>}></Route>

        </Routes>
        </BrowserRouter>)
}

