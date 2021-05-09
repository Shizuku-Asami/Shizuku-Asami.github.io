import React from 'react';
import ReactDOM from 'react-dom';

class Example extends React.Component {
    render() {
        return(
            <div className="example">
                <div className="example-header">
                    <div className="example-title">
                        {this.props.example_title}
                    </div>
                </div>
                <div className="example-body">
                    {this.props.example_body}
                </div>
            </div>
        )
    }
}

export default Example;