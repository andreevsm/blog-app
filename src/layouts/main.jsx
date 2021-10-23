import * as React from 'react';

import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';

const MainLayout = ({ title, description, children }) => (
  <>
    <SEO title={title} description={description} />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
