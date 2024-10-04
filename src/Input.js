import { forwardRef } from "react";

// custom component
// it's exactly the same component as Fragment from React
// for example
const Input = forwardRef((props, ref) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="from-label">{props.title}</label>
            <input
                type={props.type}
                id={props.name}
                ref={ref}
                className={props.className}
                autoComplete={props.autoComplete}
                onChange={props.onChange}
            >
            </input>
        </div>
    );
})

// why do we need to use a default keyword?
export default Input;

// NOTE: Only one default component could be exported