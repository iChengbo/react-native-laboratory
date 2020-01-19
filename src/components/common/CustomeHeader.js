import React from 'react';

import { Header, Left, Body, Right, Button, Icon, Title, Text, List, ListItem } from 'native-base';

export default class CustomHeader extends React.Component {
  render() {
    const { title, isHome } = this.props
    return (
      <Header>
        <Left>
          {
            isHome ?
              <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                <Icon name='menu' />
              </Button> :
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
          }
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          {/* <Button transparent>
              <Icon name='menu' />
            </Button> */}
        </Right>
      </Header>
    )
  }
}
