import React from 'react'
import { Menu, Dropdown, Icon } from 'antd';
const MenuItem = Menu.Item;
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
                <div>{o.name}</div>
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
              {this.state.text} 
              <Icon style={{float: 'right', lineHeight: '36px'}} type="down" />
            </div>
          </Dropdown>

        )
    }
}