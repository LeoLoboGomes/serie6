import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        const btn = {
            backgroundColor: "#e7e7e7",
            //border: "none",
            //padding: "16px",
            width: "40px",
            height: "40px",
        };
        const container = {
            margin: "auto",
            width: "160px",
        }
        return (
            <div className="button" style={container}>
                <button name="1" onClick={e => this.props.onClick(e.target.name)} style={btn}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)} style={btn}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)} style={btn}>3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)} style={btn}>+</button><br/>


                <button name="4" onClick={e => this.props.onClick(e.target.name)} style={btn}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)} style={btn}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)} style={btn}>6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)} style={btn}>-</button><br/>

                <button name="7" onClick={e => this.props.onClick(e.target.name)} style={btn}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)} style={btn}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)} style={btn}>9</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)} style={btn}>x</button><br/>


                <button name="C" onClick={e => this.props.onClick(e.target.name)} style={btn}>C</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)} style={btn}>0</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)} style={btn}>=</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)} style={btn}>÷</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;