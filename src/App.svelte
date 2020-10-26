<script>
	import Container from './components/Container.svelte';
	import Button from './components/Button.svelte';
	import Layout from './components/Layout.svelte';
	import Column from './components/Column.svelte';
	import Row from './components/Row.svelte';
	import Card from './components/Card.svelte';
	import CardTitle from './components/CardTitle.svelte';
</script>

<Layout>
	<Container>
		<Column>
			<Card>
				<CardTitle>Title</CardTitle>
			</Card>
			<Row>
				<Button>Click me</Button>
				<Button primary>Cancel</Button>
			</Row>
		</Column>
	</Container>
</Layout>

<style global lang="postcss">
	/* purgecss start ignore */
	@tailwind base;
	@tailwind components;
	/* purgecss end ignore */

	@tailwind utilities;
</style>