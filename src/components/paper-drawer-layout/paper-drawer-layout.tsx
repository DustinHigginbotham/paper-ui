import { Component, Element } from '@stencil/core';

@Component({
    tag: 'paper-drawer-layout',
    styleUrl: 'paper-drawer-layout.scss',
    shadow: true,
})
export class PaperDrawerLayout {

    @Element() el;

    _mq: MediaQueryList;

    componentDidLoad() {
        this._mq = window.matchMedia('(min-width: 600px)')
        this._mq.addListener(this.handleMediaQuery.bind(this))
        this.handleMediaQuery(this._mq)
    }

    componentDidUnload() {
        this._mq.removeListener(this.handleMediaQuery)
    }

    handleMediaQuery(mq) {
        console.log('hey')
        if (mq.matches) {
            this.el.removeAttribute('narrow', '')
        } else {
            this.el.setAttribute('narrow', '')
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