import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
);
