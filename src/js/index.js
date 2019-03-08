import React, { Component } from "react";
import ReactDOM from "react-dom";

function Test(props) {
    return (
        <p>
            hoge
        </p>
    );
}
console.log('hoge');

ReactDOM.render(
    <Test />,
    document.getElementById('sample')
);