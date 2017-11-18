import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'paper-list-item',
    styleUrl: 'paper-list-item.scss',
    shadow: true,
})
export class ListItem {

    @Prop() twoLine: boolean = false;

    render() {

        // TODO add action slots
        return (
            <div>
                <div class="content">
                    <slot name="icon" />
                    <slot name="avatar" />
                    <div>
                        <slot />
                    </div>
                </div>
                <slot name="action" />
            </div>
        );
    }
}