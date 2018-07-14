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


        <div>
          <p>
            An Online Tool to Explore LOGIC Results Deeper
          </p>
          <p>
            This website allows you to interactively explore the city data and LOGIC scores. Use the
            buttons below to navigate to the different functions and data views for the online LOGIC tool.
          </p>

          <p>
            Explore the relative performance of the LOGIC categories/indicators
          </p>
          <p>
            Examine and compare performance of cities “grouped” by: city size, city economy,
            geography, and low-carbon pilot status
          </p>

          <p>
            Explore LOGIC results for an individual city
          </p>

          <p>
            See the LOGIC results any of the 115 cities, across 7 categories, and 23 indicators from 2010
            to 2015
          </p>

          <p>
            Compare LOGIC results from multiple cities
          </p>
          <p>
            Select two or more cities to compare LOGIC scores across categories, indicators, and for
            different years

          </p>

          <p>
            Explore average LOGIC scores for different types of cities
          </p>
          <p>
            Examine and compare performance of cities “grouped” by: city size, city economy,
            geography, and low-carbon pilot status

          </p>



        </div>

        <div>
          <p>
            Learn About the LOGIG Methodology and Team
            Methodology


            LOGIC is a composite index, with a maximum score of 100.
            LOGIC is made up of seven green & low carbon categories/sub-categories:


            Energy & Carbon Category – with sub-categories of: Energy & Power , Industry ,
            Buildings , and Transport

            Economic Dimension Category


            Environment & Land Use Category

            Policy & Outreach Category

            Data is collected from 115 cities in China, for a total of 23 indicators.
            The indicators are defined with three types of performance
            benchmarks (i.e. international best practice, China national target, or
            as city relative ranking). The categories and indicators are weighted
            for relative importance; and then combined to calculate an overall
            index score for each city.


            Learn more about the LOGIC methodology by clicking here.

            About the LOGIC Team

            LOGIC was developed in partnership with iGDP, LBNL, and with funding
            support from the Energy Foundation China.

            Learn more about the LOGIC team by clicking here.


          </p>
        </div>

      </Container>

    )
  }
}
