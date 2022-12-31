import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './Components/Styles/Global';
import Theme from './Components/Styles/Theme';
import RoutesPages from './RouterRoutes/Routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <RoutesPages />
    </Theme>
  </React.StrictMode>,
);
