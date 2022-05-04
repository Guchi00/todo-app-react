import React from 'react'

const Item = ({item}) => {
  return (
    <div id={item._id}>{item.name}</div>
  )
}

export default Item
