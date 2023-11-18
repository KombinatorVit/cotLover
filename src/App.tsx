import HomePage from "./pages/Home.page";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CatModal} from "./components/cat-modal.component";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage/>}></Route>

            </Routes>
            <CatModal/>
        </BrowserRouter>)
}

