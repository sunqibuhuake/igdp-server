import React from 'react'
export default class ActionCard extends React.PureComponent{
    render() {
        return (
            <section style={{
                background: 'rgb(230,230,230)',
                marginBottom: 24
            }}>
                <div style={{
                    height: 37,
                    fontSize: 14,
                    lineHeight: '36px',
                    textAlign: 'left',
                    padding: '0 12px',
                    borderBottom: '1px solid white'

                }}>
                    {this.props.title}
                </div>

                <div style={{
                    minHeight: 37,
                    fontSize: 14,
                    lineHeight: '36px',
                    textAlign: 'left',
                    padding: '0 12px'
                }}>
                    {this.props.children}
                </div>
            </section>
        )
    }
}