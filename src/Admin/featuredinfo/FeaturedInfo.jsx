import React from 'react'
import "./featuredinfo.css"
import { ArrowDownward, ArrowUpward} from "@mui/icons-material"
function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featureMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-11.4<ArrowDownward/></span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featureMoneyContainer">
                <span className="featuredMoney">$4,415</span>
                <span className="featuredMoneyRate">-1.4<ArrowDownward/></span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featureMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">+2.4<ArrowUpward/></span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo