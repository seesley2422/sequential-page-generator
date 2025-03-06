
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/d10fd671-b7e3-45f0-a832-fd782868d88c.png" 
                alt="富邦金控 Fubon Financial" 
                className="h-10"
              />
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn(
                "text-base transition-colors duration-200", 
                location.pathname === "/" ? "text-fubon-blue font-medium" : "text-gray-600 hover:text-fubon-blue"
              )}
            >
              職缺搜尋
            </Link>
            <Link 
              to="/resume-area" 
              className={cn(
                "text-base transition-colors duration-200", 
                location.pathname === "/resume-area" ? "text-fubon-blue font-medium" : "text-gray-600 hover:text-fubon-blue"
              )}
            >
              履歷專區
            </Link>
            <Link 
              to="/favorites" 
              className="text-base text-gray-600 hover:text-fubon-blue transition-colors duration-200"
            >
              我的收藏
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-fubon-blue transition-colors duration-200">
              EN
            </button>
            <div className="flex items-center text-gray-600 hover:text-fubon-blue transition-colors duration-200">
              <span className="material-icons text-lg mr-1">
                person
              </span>
              <span>Hi！王大明</span>
            </div>
            <Link to="/login" className="bg-fubon-blue text-white px-4 py-1 rounded hover:bg-fubon-darkBlue transition-colors duration-200">
              會員成員
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
