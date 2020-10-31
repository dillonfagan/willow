<script>
	import Container from './components/Container.svelte';
	import Button from './components/Button.svelte';
	import Layout from './components/Layout.svelte';
	import Column from './components/Column.svelte';
	import Row from './components/Row.svelte';
	import Card from './components/Card.svelte';
	import Title from './components/Title.svelte';
	import Subtitle from './components/Subtitle.svelte';
	import Text from './components/Text.svelte';
	import Image from './components/Image.svelte';
	import Grid from './components/Grid.svelte';
	import Spacer from './components/Spacer.svelte';
	import PageTitle from './components/PageTitle.svelte';
</script>

<Layout>
	<Container>
		<Column>
			<PageTitle>Willow</PageTitle>
			<Subtitle>An opinionated Svelte component library.</Subtitle>
			<Card>
				<Image src="https://images.placeholders.dev/?width=400&height=300&text=Made%20with%20placeholders.dev&bgColor=%23f7f6f6&textColor=%236d6e71" alt="card image" />
				<Container>
					<Title>Title</Title>
					<Subtitle>This is a subtitle.</Subtitle>
					<Text>This is a text component, which is commonly used for paragraph text, like this.</Text>
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
			<Spacer />
			<Text center large italic>The best things in life are Things.</Text>
			<Spacer />
			<Grid>
				<Card>
					<Container>
						<Title>Hammer</Title>
						<Text subtle>A tool for hitting things.</Text>
					</Container>
				</Card>
				<Card featured>
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
						<Text subtle>For making some awesome Spanish food.</Text>
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