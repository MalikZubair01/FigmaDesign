import React from 'react'
import OverviewForm from './OverviewForm'
import NavHeader from './NavHeader'

function Overview(props) {

  return (
    <div >
      <NavHeader title={props.title} />
      <OverviewForm />
    </div>





  )
}

export default Overview
