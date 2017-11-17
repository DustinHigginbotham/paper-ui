import { Component } from '@stencil/core';

@Component({
    tag: 'paper-header-layout',
    styleUrl: 'paper-header-layout.scss',
    shadow: true,
})
export class HeaderLayout {

    render() {
        return (
            <div>
                <slot name="header" />

                <div class="main">
                    <slot />
                </div>
            </div>
        );
    }
}