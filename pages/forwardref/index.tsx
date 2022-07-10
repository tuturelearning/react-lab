import { NextPage } from "next";
import React, { HTMLInputTypeAttribute } from "react";

const FancyInput = React.forwardRef((props: React.InputHTMLAttributes<HTMLLIElement>, ref) => (
    <input ref={ref} {...props} />
));

const Index: NextPage = () => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    return (
        <>
            value: {inputRef?.current?.value || ''}
            <FancyInput ref={inputRef} />
            {/* ref可以获取某个组件在某时刻的状态 */}
            <button onClick={() => console.log(inputRef?.current?.value)}>get Ref value</button>
        </>
    );
}

export default Index;