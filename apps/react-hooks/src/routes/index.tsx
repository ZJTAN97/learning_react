import { Button, Card, Code, List, Stack, Text, Title } from '@mantine/core';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => (
    <Stack px="md" py="sm" gap="xl">
      <Title>Welcome to React Hooks</Title>

      <Card withBorder radius="md">
        <Text size="xl" mb="sm">
          The useState Hook
        </Text>
        <List size="md" ml="md">
          <List.Item>
            <Link
              to="/use-state-hook/dont-over-usestate"
              style={{ textDecoration: 'none' }}
            >
              Do not overuse useState hook
            </Link>
          </List.Item>
          <List.Item>
            <Link
              to="/use-state-hook/dont-over-usestate"
              style={{ textDecoration: 'none' }}
            >
              Do not overuse useState hook
            </Link>
          </List.Item>
          <List.Item>
            <Link
              to="/use-state-hook/dont-over-usestate"
              style={{ textDecoration: 'none' }}
            >
              Do not overuse useState hook
            </Link>
          </List.Item>
        </List>
      </Card>

      <Card withBorder radius="md">
        <Text size="xl" mb="sm">
          The useCallback Hook
        </Text>
        <List size="md" ml="md">
          <List.Item>
            <Link
              to="/use-state-hook/dont-over-usestate"
              style={{ textDecoration: 'none' }}
            >
              Placeholder for link and article to useCallback
            </Link>
          </List.Item>
          <List.Item>
            <Link
              to="/use-state-hook/dont-over-usestate"
              style={{ textDecoration: 'none' }}
            >
              Placeholder for link and article to useCallback
            </Link>
          </List.Item>
          <List.Item>
            <Link
              to="/use-state-hook/dont-over-usestate"
              style={{ textDecoration: 'none' }}
            >
              Placeholder for link and article to useCallback
            </Link>
          </List.Item>
        </List>
      </Card>
    </Stack>
  ),
});
