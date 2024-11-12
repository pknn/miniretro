import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from '@/pages/AppRouter';
import '@radix-ui/themes/styles.css';

const start = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error(
      'Root element does not exists. Please add element with id #root.'
    );
  }

  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <AppRouter />
    </StrictMode>
  );
};

start();
