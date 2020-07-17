import React from "react";
import "./test.scss";
import "./test.less";
import "./test.css";

import reactImg from "@/assets/img/react.jpg";
export default class Home extends React.Component {
    render(){
        return (
            <div className="test test2">
                <p>Hello World</p>
                <img src={reactImg} alt="" />
            </div>
        )
    }
}