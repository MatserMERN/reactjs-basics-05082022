import React from "react";

const Hello = () => {

    // JSX
    // return (
    //     <div id="header" className="main">
    //         <h1 id="head-one" className="sub">Hello Scott</h1>
    //     </div>
    // )

// Non JSX
    return React.createElement('div',
        { id: "header", className: "main" },
        React.createElement('h1',
            { id: "head-one", className: "sub" },
            'Hello Scott'
        ))
}

export default Hello