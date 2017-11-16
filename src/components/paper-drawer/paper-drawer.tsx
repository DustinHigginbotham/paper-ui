import { Component, Prop, } from '@stencil/core';

@Component({
    tag: 'paper-drawer',
    styleUrl: 'paper-drawer.scss',
    shadow: true,
})
export class PaperDrawer {

    @Prop() opened: boolean = false;

    render() {
        return (
            <nav>
                <slot />
            </nav>
        );
    }
}