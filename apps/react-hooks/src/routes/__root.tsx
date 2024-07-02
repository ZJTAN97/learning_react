import { AppShell, Flex, NavLink, Text } from '@mantine/core';
import {
  IconBrandReact,
  IconFilterCheck,
  IconFishHook,
  IconGridPattern,
  IconNetwork,
} from '@tabler/icons-react';
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
        width: 220,
        breakpoint: 'sm',
      }}
      padding="md"
    >
      <AppShell.Header>
        <Flex mt="sm" ml="md" gap="sm">
          <IconBrandReact color="var(--mantine-color-blue-3)" />
          <Text>Learning React</Text>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar pt="md">
        <NavLink active leftSection={<IconFishHook />} label="React Hooks" />
        <NavLink leftSection={<IconGridPattern />} label="React Patterns" />
        <NavLink leftSection={<IconNetwork />} label="React Query" />
      </AppShell.Navbar>

      <AppShell.Main>
        <ScrollRestoration />
        <Outlet />
      </AppShell.Main>
    </AppShell>
  ),
});
