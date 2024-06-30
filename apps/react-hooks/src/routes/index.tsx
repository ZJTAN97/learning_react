import { Button, Code, List, Stack, Text, Title } from '@mantine/core';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => (
    <Stack px="md">
      <Title mb="md">Welcome to React Hooks</Title>
      <Text fz="h2">useState Hooks</Text>
      <List size="md">
        <List.Item>
          <Link
            to="/use-state-hook/dont-over-usestate"
            style={{ textDecoration: 'none' }}
          >
            Do not overuse <Code>useState</Code>
          </Link>
        </List.Item>
      </List>
    </Stack>
  ),
});
