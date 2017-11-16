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
                <aside>
                    <slot name="drawer" />
                </aside>
                <div class="main">
                    <slot />
                </div>
            </div>
        );
    }
}