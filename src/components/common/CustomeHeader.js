/*
 * @Author: iChengbo
 * @Date: 2020-01-19 15:20:06
 * @LastEditors: iChengbo
 * @LastEditTime: 2020-05-31 12:48:55
 * @FilePath: /RNLaboratory/src/components/common/CustomeHeader.js
 */
import React from 'react';

import { Header, Left, Body, Right, Button, Icon, Title, Text, List, ListItem } from 'native-base';

export default class CustomHeader extends React.Component {
  render() {
    const { title, isHome } = this.props
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name='arrow-back' />
          </Button>
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
