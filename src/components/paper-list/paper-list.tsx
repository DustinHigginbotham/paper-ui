import { Component } from '@stencil/core';

@Component({
    tag: 'paper-list',
    styleUrl: 'paper-list.scss',
    shadow: true,
})
export class List {
    render() {
        return <slot />
    }
}