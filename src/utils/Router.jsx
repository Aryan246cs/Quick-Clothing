import React, { useState, useEffect } from 'react';

// Router Component
export const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');
  
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return React.Children.map(children, child => {
    if (child.props.path === currentPath) {
      return child;
    }
    return null;
  });
};

// Route Component
export const Route = ({ path, children }) => children;

// Link Component
export const Link = ({ to, children, className }) => (
  <a href={`#${to}`} className={className}>
    {children}
  </a>
);