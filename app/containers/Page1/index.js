import React from 'react'
import Container from '../../components/Container.js'
import {Row,Col} from 'antd'
import Title from '../../components/UI/Title'
import GreenTitle from '../../components/UI/GreenTitle'
import BlackTitle from '../../components/UI/BlackTitle'
import BlackText from '../../components/UI/BlackText'

import helper from '../../utils/helper'
import './style.css'
export default class Page2 extends React.PureComponent {



  render() {
    return (
      <Container style={{background: 'white', padding: '24px 0'}}>

        <div>
          <Title>
            China LOGIC Index
          </Title>
          <GreenTitle>
            Low-Carbon & Green Index for Cities (LOGIC)
          </GreenTitle>
          <BlackText>
            “LOGIC” is a new city index system and analytical tool designed to measure
            and inform China’s progress on improved solutions for low carbon and clean
            energy development, and early caarbon peaking.
            Use this website to see 2017 LOGIC Results and to Explore LOGIC Data.
          </BlackText>
        </div>

        <div>
          <BlackTitle>
            Read the 2017 LOGIC Report
          </BlackTitle>
          <GreenTitle>
            Are China’s cities getting greener?
            Which cities, which aspects, and which policies
            perform best?
          </GreenTitle>
          <BlackText>
            Find answers to these and other questions in the 2017 China
            LOGIC Report, “Progress and Prospects: China’s Cities Transitioning
            toward Energy Sustainability,and Pursuing Early Peaking of Carbon
            Emissions”.
            In 2017, iGDP collected data from 115 cities across China using 23
            low-carbon & green performance indicators. These data were
            compiled into a composite LOGIC score for each city.
            Read the key insights and recommendations from the report on this
            website (clickhere).
          </BlackText>

          <p>
            Click here to download the full 2017 report (PDF)
          </p>
        </div>


        <div>
          <p>
            View 2017 LOGIC Results by Category
          </p>
          <p>
            LOGIC tracks the performance of Chinese
            cities across seven low-carbon & green
            categories/sub-categories. View the 2017
            OGIC scores with the map on the right.
            Select to view the Overall Composite
            LOGIC Score, or view category scores by
            clicking the buttons below.

          </p>
        </div>

      </Container>

    )
  }
}
