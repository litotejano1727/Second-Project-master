import React from 'react'
import Chart from '../../chart/Chart'
import FeaturedInfo from '../../featuredinfo/FeaturedInfo'
import "./home.css"
import { UserData } from '../../chart/DummyDataChart'
import WidgetSm from '../../widgetSm/WidgetSm'
import WidgetLg from '../../widgetLg/WidgetLg'

function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={UserData} title="User Analytics" grid datakey="AcTiveUser2022"/>
        <div className="homeWidget">
          <WidgetSm/>
          <WidgetLg />
        </div>
    </div>
  )
}

export default Home