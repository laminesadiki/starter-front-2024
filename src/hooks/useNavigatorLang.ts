import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function useNavigatorLang() {
   const { i18n } = useTranslation();

   useEffect(() => {
      const lng = navigator.language;
      i18n.changeLanguage(lng);
   }, []);
}
