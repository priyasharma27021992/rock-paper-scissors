import Page from 'components/Page';
import PageLoading from 'components/PageLoading';
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import paths from 'routes/paths';

const Home = lazy(() => import('pages/home/Home'));
const PageNotFound = lazy(() => import('pages/page-not-found/PageNotFound'));

type Routes = {
   path: string;
   element: React.ReactNode;
};

const getRouteElement = (Component: React.ElementType): React.ReactNode => {
   return (
      <Suspense fallback={<PageLoading />}>
         <Page>
            <Component />
         </Page>
      </Suspense>
   );
};

const routes: Routes[] = [
   { path: paths.HOME, element: getRouteElement(Home) },
   { path: paths.NOT_FOUND, element: getRouteElement(PageNotFound) },
];

export default createBrowserRouter(routes);
