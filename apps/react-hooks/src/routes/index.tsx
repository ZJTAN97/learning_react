import { createFileRoute, Link } from '@tanstack/react-router';
import { ReactHooksCard } from '../components/ReactHooksCard';
import { Stack } from '@mantine/core';
import { IconStatusChange } from '@tabler/icons-react';

export const Route = createFileRoute('/')({
  component: () => (
    <Stack px="md" py="sm" gap="lg">
      <ReactHooksCard
        icon={<IconStatusChange color="var(--mantine-color-blue-5)" />}
        name="useState"
        links={[
          <Link to="/use-state-hook/dont-over-usestate">
            1. Do not overuse useState hook
          </Link>,
          <Link to="/use-state-hook/putting-props-to-usestate">
            2. Putting props to useState
          </Link>,
        ]}
      />
    </Stack>
  ),
});
