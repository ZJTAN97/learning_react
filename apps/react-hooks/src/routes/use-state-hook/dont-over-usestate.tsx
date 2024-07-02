import { createFileRoute } from '@tanstack/react-router';
import KeyLearnings from './key-learnings.mdx';
import {
  Anchor,
  Button,
  Code,
  Flex,
  List,
  Stack,
  Text,
  Box,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';
import { CodeHighlight } from '@mantine/code-highlight';

export const Route = createFileRoute('/use-state-hook/dont-over-usestate')({
  component: () => <Page />,
});

const Page = () => {

  const code = `
  import { fetchData } from './api';
  import { computeCategories } from './utils';

  const App = () => {
      const [data, setData] = React.useState(null);
      const categories = data ? computeCategories(data) : [];

      React.useEffect(() => {
          async function fetch() {
          const response = await fetchData();
          setData(response.data);
      }
      fetch();
      }, []);

      return <>...</>;
  };
  `;

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
          href="https://tkdodo.eu/blog/dont-over-use-state"
          target="_blank"
        >
          Original article link here
        </Anchor>
      </Flex>

      <KeyLearnings />
      <CodeHighlight code={code} language="tsx" />
    </Box>
  );
};
