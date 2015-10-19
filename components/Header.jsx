// Header.jsx
var React = require('react');

var Header = React.createClass({

    render: function() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
              <div className="container">
                <div className="navbar-header">
                  <a className="navbar-brand">
                        Wallet
                  </a>
                  <a href="https://github.com/angeliquekom/react-flux-simple-wallet-app" className="navbar-brand" target="_blank">
                        Source code
                  </a>
                </div>
              </div>
            </nav>
        );
    }

});

module.exports = Header;