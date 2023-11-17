import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp/index';
import Main from './pages/Main/index';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
