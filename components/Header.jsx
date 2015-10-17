var React = require('react');

var Header = React.createClass({

    render: function() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  </button>
                  <a className="navbar-brand">
                        Wallet
                  </a>
                </div>
              </div>
            </nav>
        );
    }

});

module.exports = Header;