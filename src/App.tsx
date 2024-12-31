import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { routes } from './routes';
import { ZoomProvider } from './contexts/ZoomContext';
import LoadingScreen from './components/loading/LoadingScreen';

function App() {
  return (
    <ZoomProvider>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route element={<Layout />}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Suspense fallback={<LoadingScreen />}>
                    {route.element}
                  </Suspense>
                }
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </ZoomProvider>
  );
}

export default App;