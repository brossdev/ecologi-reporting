import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <section className="layout">{children}</section>;
};

export default Layout;
