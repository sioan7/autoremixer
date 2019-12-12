import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

// dirty workaround
document.body.style.padding = '0';

export default app;