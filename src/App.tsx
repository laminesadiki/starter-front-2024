import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigatorLang } from '@hooks/index';
import { ROUTES, RouteType } from '@pages/routes';

function App() {
   useNavigatorLang();

   return (
         <BrowserRouter>
            <Routes>
               {ROUTES.map(({ Page, path }: RouteType, index: number) => (
                  <Route key={index} path={path} element={<Page />} />
               ))}
            </Routes>
         </BrowserRouter>
   );
}

export default App;
