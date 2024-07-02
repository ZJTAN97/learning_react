import React, { ReactNode } from 'react';
import { Card, Flex, Stack, Text } from '@mantine/core';
import { Link } from '@tanstack/react-router';

interface ReactHooksCard {
  name: string;
  links: ReactNode[];
  icon: ReactNode;
}

export const ReactHooksCard = ({
  name,
  links,
  icon,
}: ReactHooksCard) => {
  return (
    <Card withBorder radius="md">
      <Card.Section withBorder py="sm" px="sm">
        <Flex gap="md" align="center">
          {icon}
          <Text fz="h2">{name}</Text>
        </Flex>
      </Card.Section>

      <Card.Section>
        <Stack p="lg">
          {links.map((item) => (
            <Card withBorder radius="md">
              {item}
            </Card>
          ))}
        </Stack>
      </Card.Section>
    </Card>
  );
};
