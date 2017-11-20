import { Component, Prop, Method, Element, State } from '@stencil/core';

@Component({
    tag: 'paper-drawer',
    styleUrl: 'paper-drawer.scss',
    shadow: true,
})
export class Drawer {

    @Element() el;

    @State() isOpen: boolean;

    @Prop() opened: boolean = false;

    @Method()
    toggle() {
        this.isOpen = !this.isOpen
    }

    @Method()
    open() {
        this.isOpen = true
    }

    @Method()
    close() {
        this.isOpen = false
    }

    handleModalClick() {
        this.toggle()
    }

    render() {

        let classes = ['drawer-root']
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