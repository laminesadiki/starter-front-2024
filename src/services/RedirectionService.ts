import { EMAIL_SUPPORT, FRONT_LEGACY_URL } from '@config/env';
import { UrlPathsEnum } from '@shared/enums/paths.enum';

export const redirectToLegacy = () => {
   window.location.assign(FRONT_LEGACY_URL);
};

export const redirectToTermsOfUsePage = () => {
   window.location.assign(UrlPathsEnum.TERMS_OF_USE);
};

export const contactSupport = () => {
   window.location.assign(`mailto:${EMAIL_SUPPORT}`);
};

export const reloadPage = () => {
   window.location.reload();
};

export const RedirectionService = {
   redirectToLegacy,
   redirectToTermsOfUsePage,
   reloadPage,
   contactSupport,
};
