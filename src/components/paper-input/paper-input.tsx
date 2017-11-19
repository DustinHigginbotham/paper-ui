import {
    Component,
    Prop,
    State,
    Element,
    PropDidChange,
    Event,
    EventEmitter,
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
    tag: 'paper-input',
    styleUrl: 'paper-input.scss',
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
    @State() textareaSizingValue: string = '';
    @State() inputRandID: string = '';
    @State() focused: boolean = false;

    /**
     * External props
     */
    @Prop() type: string = 'text';
    @Prop() hint: string;
    @Prop() label: string;
    @Prop() id: string;
    @Prop() multiLine: boolean;
    @Prop() alwaysFloatLabel: boolean;

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

    componentDidLoad() {
        this.autoSize();
    }

    handleChange(e) {
        this.setFloatingAttr(this.internalValue)
    }

    autoSize() {
        if (this.multiLine) {
            this.textareaSizingValue = this.internalValue + '\n';
        }
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

        if (this.multiLine) {
            this.textareaSizingValue = val + "\n";
        }

    }

    handleFocused(e) {
        this.focused = true
        if (this.multiLine) {
            this.el.setAttribute('floating', '')
            this.el.setAttribute('has-focus', '')
        }
    }

    handleBlurred(e) {
        this.focused = false
        if (this.multiLine) {
            this.el.removeAttribute('has-focus')
            if (this.internalValue.length === 0) {
                this.el.removeAttribute('floating')
            }
        }
    }

    hostData() {
        return {
            // floating: this.multiLine && this.focused, // This doesn't work?
            class: {
                'has-label': this.label,
            }
        }
    }

    render() {

        let id = this.id
        if (!id) id = this.inputRandID

        let inputAttributes: any = {
            type: this.type,
            placeholder: this.hint,
        }

        let label;
        if (this.label) {
            label = (<label onClick={e => this.handleLabelClick(e)} htmlFor={id}>{this.label}</label>)
        }

        if (this.multiLine) {
            return ([
                <div class="textarea-container">
                <textarea
                    {...inputAttributes}
                    id={id}
                    rows="1"
                    onFocus={e => this.handleFocused(e)}
                    onBlur={e => this.handleBlurred(e)}
                    onChange={e => this.handleChange(e)}
                    onInput={e => this.handleInternalValueUpdate(e)} />
                    <div>{this.textareaSizingValue}</div>
                </div>,
                <div class="indicator" />,
                label,
            ]);
        }

        return ([
            <input
                {...inputAttributes}
                id={id}
                onChange={e => this.handleChange(e)}
                onInput={e => this.handleInternalValueUpdate(e)} />,
            <div />,
            label,
        ]);
    }
}