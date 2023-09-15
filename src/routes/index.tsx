import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Firebase } from '../pages/Firebase';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Firebase />} />
        </Routes>
    );
}
