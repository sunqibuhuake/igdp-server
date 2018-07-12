import React from 'react'
import { Menu, Dropdown, Icon } from 'antd';
const MenuItem = Menu.Item;
import helper from '../utils/helper'
export default class DropOptions extends React.PureComponent{

    constructor(props) {
        super(props)
        this.state = {
            menu: [],
            text: '请选择'
        }
    }

    componentDidMount() {

        const menu = this.props.options.map(o => (
            <MenuItem
            value={o.id}
            key={Math.random()}>
                <div
                  onClick={() => {
                    this.props.setValue(this.props.path, o.id)
                  }}
                >{o.name}</div>
            </MenuItem>
        ))

        this.setState({
            menu: menu
        })

    }
    render() {

        const menu = (
            <Menu>
                {this.state.menu}
            </Menu>
          );

        return (

            <Dropdown overlay={menu} trigger={['click']}>
            <div style={{
                cursor: 'pointer',
                margin: '0 -12px',
                padding: '0 12px'
            }}>
              {helper.getOptionNameById(this.props.value, this.props.options)}
              <Icon style={{float: 'right', lineHeight: '36px'}} type="down" />
            </div>
          </Dropdown>

        )
    }
}
