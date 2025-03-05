
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="bg-fubon-blue py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center text-white">
          <Link to="/" className="flex items-center hover:underline">
            <Home size={16} className="mr-1" />
          </Link>
          
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span className="mx-2">&gt;</span>
              {item.href ? (
                <Link to={item.href} className="hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
