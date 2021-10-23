import * as React from 'react';

import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';

const MainLayout = ({ children }) => (
  <>
    <SEO />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
