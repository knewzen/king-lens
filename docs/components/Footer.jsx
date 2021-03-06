import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered is-size-7">
            <p>
              © Copyright &nbsp;
              <strong className="ng-binding">KING-LENS</strong>
              <span className="hidden-xs-down ng-binding"> - Built with Love v0.1.0</span>
            </p>
            <p>
              <a className="icon" href="https://github.com/ACorolla/king-lens">
                <i className="fa fa-github"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
