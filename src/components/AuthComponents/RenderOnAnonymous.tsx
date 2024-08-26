import AuthService from '@services/AuthService';
import { AuthPropsType } from './types';

export default function RenderOnAnonymous(props: AuthPropsType) {
   const { children } = props;
   if (!AuthService.isLoggedIn()) return null;
   return children;
}
