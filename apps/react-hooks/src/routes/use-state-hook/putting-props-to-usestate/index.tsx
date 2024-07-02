import { Anchor, Button, Flex, Box } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Link, createFileRoute } from '@tanstack/react-router';
import KeyLearnings from './key-learnings.mdx';

export const Route = createFileRoute(
  '/use-state-hook/putting-props-to-usestate/',
)({
  component: () => <Page />,
});

const Page = () => {
  return (
    <Box p="lg">
      <Flex mb="xl" justify="space-between">
        <Button variant="light" leftSection={<IconArrowLeft />} size="xs">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Back to main
          </Link>
        </Button>
        <Anchor
          mt="sm"
          href="https://tkdodo.eu/blog/putting-props-to-use-state"
          target="_blank"
        >
          Original article link here
        </Anchor>
      </Flex>

      <KeyLearnings />
    </Box>
  );
};
