
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { 
      name: "Home",
      path: "/", 
      dropdown: false
    },
    { 
      name: "Skills Pathways",
      path: "/skill-groups", 
      dropdown: false
    },
    { 
      name: "Teaching Tools",
      path: "/teaching-tools", 
      dropdown: false
    },
    { 
      name: "About",
      path: "/about", 
      dropdown: false
    },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-fss-primary font-bold text-xl">Future Skills School</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              !item.dropdown ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-600 hover:text-fss-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => toggleDropdown(item.name)}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <button className="flex items-center text-gray-600 hover:text-fss-primary px-3 py-2 rounded-md text-sm font-medium">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
              )
            ))}
            <Button className="bg-fss-primary hover:bg-fss-secondary ml-2">Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-fss-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          {navItems.map((item) => (
            !item.dropdown ? (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-fss-light hover:text-fss-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <div key={item.name} className="relative">
                <button 
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-fss-light hover:text-fss-primary"
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
            )
          ))}
          <div className="px-3 py-2">
            <Button className="bg-fss-primary hover:bg-fss-secondary w-full">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
