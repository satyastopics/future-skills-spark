
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-8">
            <h3 className="text-lg font-semibold text-fss-primary mb-4">Future Skills School</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Empowering teachers with limited resources to guide students toward high-income skills
              and financial independence.
            </p>
          </div>
          
          <div className="w-full md:w-1/3 mb-8">
            <h3 className="text-gray-700 font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/" className="text-gray-600 hover:text-fss-primary">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/skill-groups" className="text-gray-600 hover:text-fss-primary">Skills Pathways</Link>
              </li>
              <li className="mb-2">
                <Link to="/teaching-tools" className="text-gray-600 hover:text-fss-primary">Teaching Tools</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-gray-600 hover:text-fss-primary">About Us</Link>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/3 mb-8">
            <h3 className="text-gray-700 font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 text-sm mb-2">Email: info@futureskillsschool.org</p>
            <p className="text-gray-600 text-sm">Phone: +91 1234567890</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-6 pt-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {currentYear} Future Skills School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
