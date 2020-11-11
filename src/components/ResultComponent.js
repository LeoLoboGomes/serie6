import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        const container = {
            margin: "auto",
            width: "160px",
        };
        return (
            <div className="result" style={container}>
                <p>{result}</p>
            </div>
    )
        ;
    }
}


export default ResultComponent;