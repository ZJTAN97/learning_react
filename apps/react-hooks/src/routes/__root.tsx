import { AppShell } from '@mantine/core';
import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from '@tanstack/react-router';

export const Route = createRootRoute({
  notFoundComponent: () => <div>Not found</div>,
  component: () => (
    <AppShell
      header={{ height: 50 }}
      navbar={{
        width: 200,
        breakpoint: 'sm',
      }}
      padding="md"
    >
      <AppShell.Header>
        <div></div>
      </AppShell.Header>

      <AppShell.Navbar p="md"></AppShell.Navbar>

      <AppShell.Main>
        <ScrollRestoration />
        <Outlet />
      </AppShell.Main>
    </AppShell>
  ),
});
