import * as React from 'react';

import '../i18n';

import SEO from '../components/seo';
import Header from '../components/header';

const MainLayout = ({ title, description, children }) => (
  <>
    <SEO title={title} description={description} />
    <div className="h-screen bg-white">
      <Header />
      <main className="ml-80">{children}</main>
    </div>
  </>
);

export default MainLayout;
