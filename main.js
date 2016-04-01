const React = require('react');
const ReactDOM = require('react-dom');
const host = document.getElementById('host');

class Time extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>It's currently {new Date().toTimeString(new Date().getTime())}</span>
        )
    }
}

class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Hello {this.props.name}! <Time></Time></div>
        );
    }
}

ReactDOM.render(<HelloMessage name='Jeff' />, host);
