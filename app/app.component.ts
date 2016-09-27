import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{subTitle}}</h2>
    `
})

export class AppComponent {
    title = 'Angular 2';
    subTitle = 'Now what?';
}