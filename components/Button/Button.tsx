import React from "react";

export type ButtonProps = {
    children: React.ReactNode;
    variant: 'primary' | 'secondary-dark' | 'secondary-light';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


const keys  = {
    'primary': 'bg-btn-primary text-white',
    'secondary-dark':'bg-btn-secondary-dark text-surface-200',
    'secondary-light':'bg-btn-secondary-light text-primary-200'
}
const keyDisabled = {
    'primary': 'bg-btn-primary-disabled text-white',
    'secondary-dark':'bg-btn-dark-disabled text-primary-100',
    'secondary-light':'bg-btn-light-disabled text-primary-100'

}
const Button = ({ variant = 'primary', children, className, disabled, ...rest}: ButtonProps) => {
    const defaultStyles = 'rounded-2 px-4 py-3';
    const styleEnabled = keys[variant];
    const styleDisabled = keyDisabled[variant];
    const fn = () => disabled ? styleDisabled : styleEnabled;

    return <button
        className={`${defaultStyles} ${className} ${fn()}`}
        disabled={disabled}
        {...rest}
        >
        { children }
    </button>
}
export default Button;