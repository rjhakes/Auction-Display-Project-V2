import React from 'react';
import ReactDOM from 'react-dom';
import '../style/auction_project.css';


export class NavBar extends React.Component {
  render() {
    return (
        <div class="header">
          <div class="dropdown">
            <ul class="nav-bar">
                <li id="login" class="location"><a  href="">Data Management</a></li>
                <li id="login" class="location"><a  href="">Transaction GUI</a></li>
                <li class="location"><a href="">Current/Previous Sale Display</a></li>
                <li class="location"><a href="">Exhibitor History Display</a></li>
                <li class="location"><a href="">Addon Display</a></li>
                <li class="location" ><a href="">Addon Transaction Display</a></li>
            </ul>
        </div>
      </div>
    )
  }
};

/*ReactDOM.render(
    <NavBar />,
    document.getElementByClass('nav-bar')
); */