import { Ring } from '@uiball/loaders'
import React from 'react'

const Loading = () => {
  return (
    <div className="loader bg-[rgba(0,0,0,0.7)]">
    <Ring className="text-white" color="white" />
  </div>
  )
}

export default Loading