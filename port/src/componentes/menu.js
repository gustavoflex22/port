import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Menu() {
return (
    <Router>
    <nav>
        <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
<li><Link to="/projects">Projects</Link></li>
        <li><Link to="/team">Team</Link></li>
<li Link to="/contact">Contact</li>
        </ul>
    </nav>
    <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Adicione as outras rotas aqui */}
    </Routes>
    </Router>
);
}