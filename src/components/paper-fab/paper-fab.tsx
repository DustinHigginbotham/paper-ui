import { Component } from '@stencil/core';

@Component({
    tag: 'paper-fab',
    styleUrl: 'paper-fab.scss',
    shadow: true,
})
export class PaperFab {

    render() {
        return (
            <button><slot /></button>
        );
    }
}