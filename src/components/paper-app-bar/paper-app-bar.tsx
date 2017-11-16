import { Component } from '@stencil/core';

@Component({
    tag: 'paper-app-bar',
    styleUrl: 'paper-app-bar.scss',
    shadow: true,
})
export class PaperAppBar {

    render() {
        return (
            <header>
                <slot />
            </header>
        );
    }
}