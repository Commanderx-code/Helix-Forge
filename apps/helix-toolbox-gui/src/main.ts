import { mount } from 'svelte';
import './app.css';
import App from './App.svelte';
import { applyRemembered } from './lib/theme';

applyRemembered();

export default mount(App, { target: document.getElementById('app')! });
