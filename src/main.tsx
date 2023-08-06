import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Router from 'routes/Router.tsx';
import 'globals.css';
import BetProvider from 'context/BetProvider';
import ScorerProvider from 'context/ScorerProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <BetProvider>
         <ScorerProvider>
            <RouterProvider router={Router} />
         </ScorerProvider>
      </BetProvider>
   </React.StrictMode>,
);
