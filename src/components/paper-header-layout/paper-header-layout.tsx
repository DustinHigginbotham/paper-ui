import { Component, Element } from '@stencil/core';

@Component({
    tag: 'paper-header-layout',
    styleUrl: 'paper-header-layout.scss',
    shadow: true,
})
export class HeaderLayout {

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
        } else {
            this.el.setAttribute('narrow', '')
        }
    }

    render() {
        return (
            <div>
                <slot name="header" />

                <div class="main">
                    <slot />
                </div>
            </div>
        );
    }
}