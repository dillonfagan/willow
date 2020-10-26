<script>
	import Container from './components/Container.svelte';
	import Button from './components/Button.svelte';
	import Layout from './components/Layout.svelte';
	import Column from './components/Column.svelte';
	import Row from './components/Row.svelte';
	import Card from './components/Card.svelte';
	import CardTitle from './components/CardTitle.svelte';
	import CardImage from './components/CardImage.svelte';
</script>

<Layout>
	<Container>
		<Column>
			<Card>
				<CardImage src="https://images.placeholders.dev/?width=400&height=300&text=Made%20with%20placeholders.dev&bgColor=%23f7f6f6&textColor=%236d6e71" alt="card image" />
				<Container>
					<CardTitle>Title</CardTitle>
				</Container>
			</Card>
			<Row>
				<Button>Click me</Button>
				<Button primary>Cancel</Button>
			</Row>
			<Row right>
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