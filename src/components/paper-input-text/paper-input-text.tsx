import {
    Component,
    Prop,
    State,
    Element,
    PropDidChange,
    Event,
    EventEmitter,
    Listen,
    Method,
} from '@stencil/core';

// I assume this is overkill, and I hijacked it from stackoverflow... but it works!
const getRandID = () => {
    var S4 = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

@Component({
    tag: 'paper-input-text',
    styleUrl: 'paper-input-text.scss',
    shadow: true,
})
export class InputText {

    @Element() el: HTMLElement;

    @Event() input: EventEmitter;

    /**
     * Internal state
     */
    @State() showingHint: boolean = false;
    @State() internalValue: string = '';
    @State() inputRandID: string = '';

    /**
     * External props
     */
    @Prop() type: string = 'text';
    @Prop() hint: string;
    @Prop() label: string;
    @Prop() id: string;
    @Prop() alwaysFloatLabel: boolean = false;

    @Prop() value: string = '';
    @PropDidChange('value')
    handleUpdateValue(newVal: string) {
        this.setFloatingAttr(newVal)
    }

    // TODO: figure out a way to allow for a better getter
    @Method()
    getValue() {
        return this.internalValue
    }

    componentWillLoad() {
        this.inputRandID = getRandID()
    }

    @Listen('input')
    handleInput() {
        this.setFloatingAttr(this.internalValue)
    }

    setFloatingAttr(val: string) {
        if (val.length > 0) {
            this.el.setAttribute('floating', '')
        } else {
            this.el.removeAttribute('floating')
        }
    }

    handleInternalValueUpdate(e) {
        const val = e.target.value;
        this.internalValue = val;
        // this.input.emit(val)
        // this.el.dispatchEvent(new CustomEvent('input', { detail: val }))
    }

    render() {

        let rootClasses = []

        let id = this.id
        if (!id) id = this.inputRandID

        let inputAttributes: any = {
            type: this.type,
            placeholder: this.hint,
        }

        let label;
        if (this.label) {
            rootClasses.push('has-label')
            label = (<label htmlFor={id}>{this.label}</label>)
        }

        return (
            <div class={rootClasses.join(' ')}>
                <input {...inputAttributes} id={id} onInput={e => this.handleInternalValueUpdate(e)} />
                <div />
                {label}
            </div>
        );
    }
}