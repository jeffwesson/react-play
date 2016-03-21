const React = require('react');
const ReactDOM = require('react-dom');

const host = document.getElementById('host');

const HelloMessage = React.createClass({
    render: function () {
        return <div>Hello {this.props.name}</div>;
    }
})

ReactDOM.render(<HelloMessage name='Jeff' />, host);
