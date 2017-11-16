import { Component, Prop, Method, Element, State } from '@stencil/core';

@Component({
    tag: 'paper-drawer',
    styleUrl: 'paper-drawer.scss',
    shadow: true,
})
export class PaperDrawer {

    @Prop() opened: boolean = false;

    @State() isOpen: boolean = this.opened;

    @Element() el;

    @Method()
    toggle() {
        this.isOpen = !this.isOpen
    }

    @Method()
    open() {
        // this.el.setAttribute('opened', '')
    }

    @Method()
    close() {
        // this.el.removeAttribute('opened')
    }

    handleModalClick() {
        this.toggle()
    }

    render() {

        let classes = []
        if (this.isOpen || this.opened) classes.push('opened')

        return (
            <div class={classes.join(' ')}>
                <aside>
                    <slot />
                </aside>
                <div class="overlay" onClick={() => this.handleModalClick()}/>
            </div>
        );
    }
}