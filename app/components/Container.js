import React from 'react'
export default class Container extends React.PureComponent{
    render() {
        return (
            <div style={{
                width: '100%',
                padding: 0,
                margin: 0,
                position: 'relative',
                display: 'block',
                ... this.props.style
                }}>
                <div style={{
                    width: 1200,
                    margin: '0 auto'
                }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
