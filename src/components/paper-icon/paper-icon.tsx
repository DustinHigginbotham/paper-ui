import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'paper-icon',
    styleUrl: 'paper-icon.scss',
    shadow: true,
})
export class Icon {

    @Prop() icon: string;

    render() {

        return (
            <svg class="icon">
                <use xlinkHref={`/assets/icons.svg#${this.icon}`} />
            </svg>
        );

    }
}