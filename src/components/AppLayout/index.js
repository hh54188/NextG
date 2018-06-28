import React from "react";
import { Header, Divider } from "semantic-ui-react";
import { observer } from "mobx-react";

@observer
export default class AppLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { children, title } = this.props;
    return (
      <div>
        {title && (
          <React.Fragment>
            <Header as="h2">
              <Header.Content>{title}</Header.Content>
            </Header>
            <Divider />
          </React.Fragment>
        )}
        {children}
      </div>
    );
  }
}
