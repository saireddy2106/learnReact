import React,{useId} from "react";


const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
},ref){
    const id = useId();
    return (
        <div className="w-full">
            {label && <label 
            className="inline-block mb-1 pl-1"
            htmlFor={id}>{label}</label> }
            <input type={type} 
            className={`border border-gray-300 rounded-md p-2 w-full ${className}`}
             ref={ref} {...props} 
             id={id}        
              /></div>
    )
});

export default Input;