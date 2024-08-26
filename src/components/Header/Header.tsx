import { useTranslation } from 'react-i18next';
import './Header.scss';

function Header() {
   const { t } = useTranslation();
   return (
      <div className="home__header">
         <h1>Opalexe</h1>
         <h1>{t('home.opalexe.title')}</h1>
         <h3>{t('home.opalexe.subtitle')}</h3>
      </div>
   );
}

export default Header;
