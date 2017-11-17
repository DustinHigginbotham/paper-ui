import { Component } from '@stencil/core';


@Component({
    tag: 'paper-list-item',
    styleUrl: 'paper-list-item.scss',
    shadow: true,
})
export class ListItem {

    render() {

        // TODO add action slots
        return (
            <div>
                <slot />
            </div>
        );
    }
}