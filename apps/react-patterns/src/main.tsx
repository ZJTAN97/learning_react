import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Host } from './components/Host';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <Host />
  </StrictMode>,
);
