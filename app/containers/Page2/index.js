import React from 'react'
import Container from '../../components/Container.js'
import {Row,Col} from 'antd'
import ActionCard from '../../components/ActionCard.js'
import DropOptions from '../../components/DropOptions.js'
export default class Page2 extends React.PureComponent{
    render() {
        return (
            <Container style={{background: 'white', padding: '24px 0'}}>

                <Row>
                    <Col span={6}></Col>
                    <Col span={12}></Col>
                    <Col span={6}>
                        <ActionCard
                            title="Select Year for Data"
                        >
                            <DropOptions
                                options={[{name: '1', id: 1}]}
                            ></DropOptions>
                        </ActionCard>
                    </Col>
                </Row>
            </Container>

        )
    }
}