import React from 'react'
import "./CardList.css"
import Card from '../card/Card';

export default function CardList({monsters}) {
  return (
    <div className='card-list'>
      {monsters.map(monster => <Card monster={monster} key={monster.id}/>
      )}</div>
  )
}