import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
return (
    <footer className="footer bg-gray-700 text-white p-4 text-center">
    <div>Copyright © 2023 Seu Time</div>
    <div>
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
    </div>
    </footer>
);
}