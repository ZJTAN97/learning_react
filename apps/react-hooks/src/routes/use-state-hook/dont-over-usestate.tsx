import { Anchor, Code, Group, List, Stack, Text } from '@mantine/core';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/use-state-hook/dont-over-usestate')({
  component: () => <Page />,
});

const Page = () => {
  return (
    <Stack p="sm" gap="xl">
      <Link to="/" style={{ textDecoration: 'none' }}>
        Back to React Hooks
      </Link>
      <Anchor href="https://tkdodo.eu/blog/dont-over-use-state" target="_blank">
        Original article link here
      </Anchor>
      <Stack>
        <Text fz="h3">Key learnings from the Article</Text>
        <List size="sm" ml="sm">
          <List.Item>
            Data passed in from a parent via props are not state
          </List.Item>
          <List.Item>
            Whenever a state setter function is only used synchronously in an
            effect, get rid of the state
          </List.Item>
        </List>
      </Stack>
      <Stack>
        <Text fz="h3">Example to enforce learning</Text>
        <Text size="sm">Fetching data from remote endpoint </Text>
        <Code block w="75%">
          {`
    import { fetchData } from './api'
    import { computeCategories } from './utils'

    const App = () => {
        const [data, setData] = React.useState(null)
        const categories = data ? computeCategories(data) : []
        
        React.useEffect(() => {
            async function fetch() {
            const response = await fetchData()
                setData(response.data)
            }
            fetch()
            }, [])

        return <>...</>
    }
        `}
        </Code>
      </Stack>
    </Stack>
  );
};
