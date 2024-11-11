import React from "react";
// interface TextAreaType extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{}
// interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {}

// export interface InputProps {
//     label?: string;
//     labelIcon?: string;
//     state: string;
//     multiline: boolean;
//     attrs:TextAreaType | InputType
// }

export type InputProps = {
    label?: string,
    labelRequirement?: string,
    labelHelper?: string,
    labelIcon?: string,
    state: string,
    multiline: boolean,
    disabled: boolean,
    attrs: React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>
} & (
    React.InputHTMLAttributes<HTMLInputElement> |
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
)
interface LabelType {
    label: string,
    labelRequirement?: string
}
const Label = ({label, labelRequirement}: LabelType ) => {
    return (
        <>
            <label
                className="inline-block pb-3 surface-700 disabled">
                    { label }
                    <span className="pl-2 text-sm">
                        {labelRequirement} 
                        {/* <img src="../../imgs/information-circle.png"/> */}
                    </span>
            </label>
            <br></br>
        </>
    )
}
const TextArea = (attrs: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    return <textarea {...attrs as React.TextareaHTMLAttributes<HTMLTextAreaElement>}></textarea>
}
const Input = ({ label, labelRequirement, labelHelper, multiline, attrs }: InputProps) => {
    if(multiline) {
        return (
            <div>
                { label && <Label label={label} labelRequirement={labelRequirement}/> }
                <TextArea
                    className="px-4 py-3 border-2 rounded-1 border-surface-500"
                    {...attrs  as React.TextareaHTMLAttributes<HTMLTextAreaElement>}/>
            </div>
        )
    } else {
        return (
            <>
               { label && <Label label={label} labelRequirement={labelRequirement}/> }
                <input
                    className="border-surface-300 border-2 rounded-1 px-4 py-2"
                    {...attrs as React.InputHTMLAttributes<HTMLInputElement>} />
                <span className="py-2  block surface-700 text-xs">{labelHelper}</span>
            </>
        )
    }
}
export default Input;