/**
 * Created by Administrator on 2018-07-15.
 */
import React from 'react'
const list = [
  'Cities should continue to use comprehensive data-driven analysis to evaluate,track, and compare low-carbon and green performance.',
  'Cities can use the LOGIC framework to accelerate progress and promote the best green & low-carbon pathways according to specific needs. ',
  'Cities should continue strong political leadership, and accelerate pilot efforts,to ensure consistent follow-through on low-carbon commitments.',
  'Mega-cities need special attention, to avoid backsliding on green & low-carbon goals.',
  'As the next critical step, city leaders can apply lessons from the best LOGIC cities to prepare integrated low-carbon action plans for decision making and action. '
]
export default function(props) {
  return (
    <div style={{width: '80%'}}>
      {list.map(item => {
        return (
          <div className="page4-list-item">
            {item}
          </div>
        )
      })}
    </div>
  )


}
