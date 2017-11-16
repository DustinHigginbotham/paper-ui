import { Component } from '@stencil/core';

@Component({
    tag: 'paper-drawer-layout',
    styleUrl: 'paper-drawer-layout.scss',
    shadow: true,
})
export class PaperDrawerLayout {

    render() {
        return (
            <div>
                <slot name="drawer" />
                <div class="main">
                    <slot />
                </div>
            </div>
        );
    }
}