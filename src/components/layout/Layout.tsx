import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { useEffect } from 'react';
import type React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  emptyPage?: boolean;
  pageTitle?: string;
}

const Layout = ({ pageTitle, emptyPage, children }: LayoutProps) => {
  useEffect(() => {
    if (import.meta.env.REACT_APP_PROJECT_NAME) {
      document.title = `${pageTitle} | ${import.meta.env.REACT_APP_PROJECT_NAME}`;
    } else {
      document.title = `${pageTitle} | ${import.meta.env.REACT_APP_SLUG}`;
    }
  }, [pageTitle]);

  return (
    <>
      {emptyPage ? (
        children
      ) : (
        <div id="site-wrapper" className="flex flex-col h-screen">
          <Header />
          <main id="site-main" className="h-auto flex-1">
            {children}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
