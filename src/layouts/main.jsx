import * as React from 'react';

import '../i18n';

import SEO from '../components/seo';
import Header from '../components/header';

const MainLayout = ({ title, description, children }) => (
  <>
    <SEO title={title} description={description} />
    <div className="grid grid-cols-6 h-screen bg-white">
      <Header />
      <main className="col-span-5">{children}</main>
    </div>
  </>
);

export default MainLayout;
