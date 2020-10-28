<script>
	import Container from './components/Container.svelte';
	import Button from './components/Button.svelte';
	import Layout from './components/Layout.svelte';
	import Column from './components/Column.svelte';
	import Row from './components/Row.svelte';
	import Card from './components/Card.svelte';
	import Title from './components/Title.svelte';
	import Image from './components/Image.svelte';
	import Grid from './components/Grid.svelte';
</script>

<Layout>
	<Container>
		<Column>
			<Card>
				<Image src="https://images.placeholders.dev/?width=400&height=300&text=Made%20with%20placeholders.dev&bgColor=%23f7f6f6&textColor=%236d6e71" alt="card image" />
				<Container>
					<Title>Title</Title>
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
			<Grid>
				<Card>
					<Container>
						<Title>Hammer</Title>
					</Container>
				</Card>
				<Card>
					<Container>
						<Title>Vacuum Cleaner</Title>
					</Container>
				</Card>
				<Card>
					<Container>
						<Title>Projector</Title>
					</Container>
				</Card>
				<Card>
					<Container>
						<Title>Paella Pan</Title>
					</Container>
				</Card>
			</Grid>
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