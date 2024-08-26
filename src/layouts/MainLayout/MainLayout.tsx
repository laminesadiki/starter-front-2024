import ContactSupport from '@components/ContactSupport/ContactSupport';
import Header from '@components/Header/Header';
import { ReactNode } from 'react';
import './MainLayout.scss';
import FooterList from '@components/FooterList/FooterList';
import { useScreenSize } from '@hooks/useScreenSize';
type MainLayoutProps = {
   children: ReactNode;
};

function MainLayout(props: MainLayoutProps) {
   const { children } = props;
   const screenSize = useScreenSize();

   return (
      <div
         className="home"
         style={{ minHeight: screenSize.height >= 850 ? '100vh' : '850px' }}
      >
         <div className="header">
            <Header />
         </div>
         <div className="children">{children}</div>
         <div className="footer">
            <FooterList />
            <ContactSupport />
         </div>
      </div>
   );
}

export default MainLayout;
