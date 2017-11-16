import { Component } from '@stencil/core';

@Component({
    tag: 'paper-header-layout',
    styleUrl: 'paper-header-layout.scss',
    shadow: true,
})
export class PaperHeaderLayout {

    render() {
        return (
            <div>
                <div class="header-wrapper">
                    <slot name="header" />
                </div>

                <slot />
            </div>
        );
    }
}