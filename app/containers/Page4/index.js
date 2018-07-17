import React from 'react'
import Container from '../../components/Container.js'
import {Row,Col} from 'antd'
import Title from '../../components/UI/Title'
import GreenTitle from '../../components/UI/GreenTitle'
import BlackTitle from '../../components/UI/BlackTitle'
import BlackText from '../../components/UI/BlackText'
import CountItem from '../../components/UI/CountItem'
import List from './List'

import tri_img from './assets/tri.png'
import chart1_img from './assets/chart1.png'
import chart2_img from './assets/chart2.png'
import chart3_img from './assets/chart3.png'
import chart4_img from './assets/chart4.png'
import chart5_img from './assets/chart5.png'
import chart6_img from './assets/chart6.png'
import chart7_img from './assets/chart7.png'

import Map from '../../components/Chart/Map'

import Legend from '../../components/UI/Legend'

import {getTotalPosData} from '../../utils/calc'

import './style.css'

import Footer from '../Footer'
import Header from '../Header'
export default class Page4 extends React.PureComponent {



  render() {

    const legendList = [
      {
        color: '#F8C370',
        text: 'Enery & Power'
      },
      {
        color: '#F19489',
        text: 'Economic Dimension'
      },
      {
        color: '#F7DC6E',
        text: 'Industry'
      },
      {
        color: '#85C1E9',
        text: 'Environment & Land Use'
      },
      {
        color: '#7DCE9F',
        text: 'Transportation'
      },
      {
        color: '#C39BD1',
        text: 'Policy Dimension'
      },
      {
        color: '#76D7C3',
        text: 'Building'
      }
    ]

    const cityData = getTotalPosData(2015, this.props.lang)
    return (
      <div style={{background: 'white', width: '100%'}}>
        <Container style={{padding: '48px 0', background: 'white'}}>
          <Row>
            <Col span={14}>
              <Title>
                <span
                  style={{color: '#6ab131'}}
                >
                  2017 LOGIC Scores
                </span>
              </Title>
              <GreenTitle>
                Progress and Prospects<br/>
                in China’s Transition toward Sustainable Cities
              </GreenTitle>
              <div style={{height: 36}}></div>
              <BlackText>
                “LOGIC” is a new city index system and analytical tool designed to measure
                and inform China’s progress on improved solutions for low carbon and clean
                energy development, and early caarbon peaking.
                <br/>
                Use this website and online tool to explore the LOGIC results of China’s cities.
              </BlackText>
            </Col>
            <Col span={10}>
              <div style={{height: 480}}>
                <Map
                  data={{
                    cities: cityData,
                    color: '133, 193, 233'
                  }}
                >

                </Map>

              </div>
            </Col>
          </Row>
        </Container>

        <Container style={{background: '#e6e6e6', padding: '48px 0'}}>
          <Row>
            <Col span={8}>
              <CountItem
                num={115}
                name="City"
              >
              </CountItem>

            </Col>
            <Col span={8}>
              <CountItem
                num={7}
                name="Index Categories"
              >
              </CountItem>
              <div>
                <Legend data={legendList}></Legend>
              </div>
            </Col>
            <Col span={8}>
              <CountItem
                num={44.8}
                name="Avg City Score"
              >
              </CountItem>

              <div>
                <div>
                  <span style={{fontSize: 16, marginRight: 12}}>
                    69.7
                  </span>
                  <span style={{fontSize: 14}}>
                    Max City Score
                  </span>
                </div>

                <div>
                  <span style={{fontSize: 16, marginRight: 12}}>
                    28.4
                  </span>
                  <span style={{fontSize: 14}}>
                    Min City Score
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container style={{padding: '48px 0', background: 'white'}}>

          <GreenTitle>
            Overall Change in LOGIC Scores，2010-2015
          </GreenTitle>
        </Container>

        <Container style={{padding: '48px 0', background: 'white'}}>
          <BlackTitle>
            Composite LOGIC Scores for 115 Chinese City
          </BlackTitle>
          <div style={{textAlign: 'center'}}>
            <img src={tri_img} style={{width: 24}} />
          </div>
          <div>
            <img src={chart1_img} style={{width: '100%', padding: '24px 0'}} />
          </div>
          <BlackTitle style={{marginBottom: 12}}>
            Explore Key Insights from the 2017LOGIC Results Below
          </BlackTitle>
          <GreenTitle style={{textAlign: 'center'}}>
            Overall Change in LOGIC Scores，2010-2015
          </GreenTitle>
          <div style={{textAlign: 'center'}}>
            <img src={tri_img} style={{width: 24}} />
          </div>
        </Container>



        <Container style={{background: '#e6e6e6', padding: '48px 0'}}>
          <Row>
            <Col span={16} style={{paddingTop: 48}}>
              <GreenTitle>
                China’s cities are getting greener
              </GreenTitle>
              <BlackText>
                Overall green and low carbon index scores improved from 2010-2015
              </BlackText>
            </Col>
            <Col span={8} style={{textAlign: 'right'}}>
              <img src={chart2_img} style={{width: '80%'}} />

            </Col>
          </Row>
        </Container>

        <Container style={{background: 'white', padding: '48px 0'}}>
          <Row>
            <Col span={12} style={{textAlign: 'left'}}>
              <img src={chart3_img} style={{width: '80%'}} />
            </Col>
            <Col span={12}>
              <GreenTitle style={{textAlign: 'right'}}>
                All city Groups saw LOGIC score<br/>
                improvements from 2010 to 2015
              </GreenTitle>
              <BlackText>
                The average overall index score across all of China’s citiesgrew 2.5 points , or 6.6% , from 2010  to 2015.
                <br/>
                <br/>

                In aggregate ,  cities of all types saw growth in their averageoverall   scores － ecomomic  groups ,   size groupsand pilot groups all saw LOGIC score growth, ranging from 4% to 13%，respectively. China’s large “Mega”cities,“Post-Industrial”cities,and Low-Carbon
                <br/>
                Pilotcities performed particularly well over this period.

              </BlackText>

            </Col>
          </Row>
        </Container>

        <Container style={{background: '#e6e6e6', padding: '48px 0'}}>
        <BlackTitle>
          LOGIC Scores and Chinese Ecomomic Growth
        </BlackTitle>

        <Row>
          <Col span={12}>
            <GreenTitle>
              China’s Cities Are seeing Green Growth
            </GreenTitle>
            <BlackText>
              More than 90 out of the 116 cities in the sample saw
              both GDP growth and LOGIC growth from 2010-2015.
              <br/>
              <br/>
              All of the 115  cities in the sample saw GDP growth
              from 2010-2015(from+40%,to more than + 100%
              growth over the five years ).  More than  90 cities also
              had increased LOGIC  scores over the same period  -
              some with slight increases,others with up to a 25%
              increase.Among these, there are two unique clusters
              of high - performing  cities (see figure). Cities in both
              clusters show that green & low - carbon goals need
              not come at the expense of the economy.
            </BlackText>
          </Col>
          <Col span={12} style={{paddingTop: 48, textAlign: 'center'}}>
            <img src={chart4_img} style={{width: '80%'}} />

          </Col>
        </Row>
      </Container>
        <Container style={{background: 'white', padding: '48px 0'}}>
          <BlackTitle>
            LOGIC Scores by category
          </BlackTitle>
          <GreenTitle style={{textAlign: 'center'}}>
            But Chinese Cities Still Have Significant Potential to Improve
          </GreenTitle>
          <Row>
            <Col span={12} style={{paddingTop: 36, textAlign: 'center'}}>
              <img src={chart5_img} style={{width: '92%'}} />
            </Col>
            <Col span={12}>
              <BlackText>
                Green & low-carbon performance on average
                reaches 45% of LOGIC potential.
                <br/>
                <br/>
                While LOGIC scores and economies have both
                grown in recent years, the average overall
                index score for all Chinese cities in 2015 is still
                only 44.9, out of 100. Chinese cities have
                room to improve. Yet, some cities did achieve
                high scores; and those bestperforming cities
                indicate a positive pathway for all cities to
                catch up.
                <br/>
                And LOGIC by definition is ambitious–its
                indicators are designed using world-class
                green benchmarks and are intended to
                push Chinese cities to do more, and quicker.

              </BlackText>
            </Col>

          </Row>
        </Container>

        <Container style={{background: '#e6e6e6', padding: '48px 0'}}>
          <BlackTitle>
            China’s Low Carbon Pilot Cities’ LOGIC Scores
          </BlackTitle>

          <Row>
            <Col span={14}>
              <GreenTitle>
                China's Low-Carbon Pilot Cities Are Leading
                the Way
              </GreenTitle>
              <BlackText>
                Pilot cities have higher LOGIC scores, and their scores are
                improving faster.
                <br/>
                <br/>
                In 2015, average overall index sores for China's Low-Carbon
                Pilot cities was 47.0, compared to 42.9 for non-pilot cities.
                Furthermore, Low-Carbon Pilot Cities make up 80% of the
                list of Top 20 LOGIC cities in 2015 (despite being less than
                half of the sample population). Pilot cities also saw a quicker
                increase in their scores over the 2010-2015 period. China’s
                low-carbon pilot program is working so far, although more
                work is required to fully achieve China’s green & low carbon
                goals.
              </BlackText>
            </Col>
            <Col span={10} style={{paddingTop: 24, textAlign: 'right'}}>
              <img src={chart6_img} style={{width: '60%'}} />

            </Col>
          </Row>
        </Container>

        <Container style={{background: 'white', padding: '48px 0'}}>
          <BlackTitle>
            Change in Score Values for LOGIC Categories
          </BlackTitle>

          <Row>
            <Col span={8} style={{paddingTop: 24, textAlign: 'left'}}>
              <img src={chart7_img} style={{width: '75%'}} />
            </Col>
            <Col span={16}>
              <GreenTitle>
                Most LOGIC categories showed improvement
              </GreenTitle>
              <BlackText>
                in average scores over the fiveyear period from 2010 to 2015.
                <br/>
                <br/>
                Most of the LOGIC categories and subcategories showed varying
                degrees of improvement in average scores over the five-year period
                from 2010 to 2015. Only the Environment & Land Use category
                showed a decline in average score (a drop of -0.6 points, or -4.7%
                from 2010 to 2015). All other categories saw average score growth.
                Figure 32 shows a slope-graph with score changes for each category
                over this period. Table 8 shows a statistical summary of the category
                changes.
                <br/>
                While it was observed earlier in the report that the Economic
                Dimension category had the lowest overall performance in the index,
                this category actually had the highest growth (raising 1.2 points, or
                29% from its 2010 value).The Economy category improvement
                contributed 46% of the total index score change. Also notable is the
                Industry

              </BlackText>
            </Col>

          </Row>
        </Container>

        <Container style={{background: '#e6e6e6', padding: '48px 0'}}>
          <BlackTitle>
            Recommendations for Chinese Policy Makers
          </BlackTitle>

          <List></List>

        </Container>

        <Footer></Footer>




      </div>

    )
  }
}
