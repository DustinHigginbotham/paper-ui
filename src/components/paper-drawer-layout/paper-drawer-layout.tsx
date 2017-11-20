import { Component, Element } from '@stencil/core';

@Component({
    tag: 'paper-drawer-layout',
    styleUrl: 'paper-drawer-layout.scss',
    shadow: true,
})
export class DrawerLayout {

    _mq: MediaQueryList;

    @Element() el: HTMLElement;

    componentDidLoad() {
        this._mq = window.matchMedia('(min-width: 600px)')
        this._mq.addListener(this.handleMediaQuery.bind(this))
        this.handleMediaQuery(this._mq)
    }

    componentDidUnload() {
        this._mq.removeListener(this.handleMediaQuery)
    }

    handleMediaQuery(mq) {
        if (mq.matches) {
            this.el.removeAttribute('narrow')
            this.el.classList.remove('narrow')
        } else {
            this.el.setAttribute('narrow', '')
            this.el.classList.add('narrow')
        }
    }

    render() {
        return (
            <div>
                <aside>
                    <slot name="drawer" />
                </aside>
                <div class="main">
                    <slot />
                </div>
            </div>
        );
    }
}