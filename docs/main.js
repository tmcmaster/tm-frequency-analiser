import {html, render} from "./web_modules/lit-html.js";

import './web_modules/@wonkytech/tm-examples.js';

let sites = {
    'src': 'https://github.com/tmcmaster/tm-frequency-analiser',
    'pika': 'https://www.pika.dev/npm/@wonkytech/tm-frequency-analiser',
    'npm': 'https://www.npmjs.com/package/@wonkytech/tm-frequency-analiser',
    'docs': 'https://github.com/tmcmaster/tm-frequency-analiser#readme'
};

render(html`
    <style>
        body {
          padding: 0;
          margin: 0;
        } 
    </style>
    <tm-examples heading="tm-frequency-analiser" .sites="${sites}">
        <section title="Example">
            <tm-frequency-analiser></tm-frequency-analiser>
        </section>
    </tm-examples>
`, document.querySelector('body'));