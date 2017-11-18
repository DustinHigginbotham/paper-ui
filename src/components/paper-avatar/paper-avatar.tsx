import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'paper-avatar',
    styleUrl: 'paper-avatar.scss',
    shadow: true,
})
export class Avatar {

    @Prop() name: string;
    @Prop() src: string;

    render() {

        if (this.src) {
            return <img src={this.src} />
        }

        if (this.name) {
            const names = this.name.split(' ')
            return names[0][0] + (names.length > 1 ? names[1][0] : '')
        }

        return null;
    }
}