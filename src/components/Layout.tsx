import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="layout" title="ecologi-reporting">
      {children}
    </section>
  );
};

export default Layout;
