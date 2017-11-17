import { Component } from '@stencil/core';

@Component({
    tag: 'paper-app-bar',
    styleUrl: 'paper-app-bar.scss',
    shadow: true,
})
export class AppBar {

    render() {
        return (
            <slot />
        );
    }
}