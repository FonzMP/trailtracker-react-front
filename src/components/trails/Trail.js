import React, { Component } from 'react'
import ShowTrail from './ShowTrail'
import EditTrail from './EditTrail'
import Toggle from '../../utilities/Toggle'

const Trail = ({ trail, update, delete: deleteAction }) => (
  <div className="trail-container">
    <Toggle>
      {({ on, toggle }) => {
        return on ? (
          <EditTrail trail={trail} update={update} showTrail={toggle} delete={deleteAction} />
        ) : (
          <ShowTrail trail={trail} edit={toggle} delete={deleteAction} />
        )
      }}
    </Toggle>
  </div>
)

export default Trail
