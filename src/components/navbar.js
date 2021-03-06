import React from "react";
import '../style/navbar.css'
import {
  Nav,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs className="nav">
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Link
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem Github>
                <a href="www.github.com/cmgonzales" target="_blank">Github</a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <h1 className="navs">San Francisco Crime Records</h1>
        </Nav>
      </div>
    );
  }
}
