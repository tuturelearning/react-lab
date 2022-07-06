import { NextPage } from "next";
import React from "react";

const Forwardref: NextPage = () => {
    const FancyButton = React.forwardRef((props, ref) => (
        <button ref={ref} className="FancyButton" onClick={props.onClick}>
            {props.children}
        </button>
    ));

    const ref = React.createRef<string>();

    return (
        <FancyButton ref={ref} onClick={() => console.log(ref, 'ref')}>click me</FancyButton>
    )
};

export default Forwardref;