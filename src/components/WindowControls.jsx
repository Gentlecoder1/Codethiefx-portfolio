import React from 'react'
import useWindowStore from '#store/window'

const WindowControls = ({ target }) => {
    const { closeWindow, minimizeWindow, toggleMaximize } = useWindowStore();

  return (
    <div id='window-controls'>
        <div className='close' onClick={() => closeWindow(target)} />
        <div className='minimize hidden sm:block' onClick={() => minimizeWindow(target)} />
        <div className='maximize hidden sm:block' onClick={() => toggleMaximize(target)} />
    </div>
  )
}

export default WindowControls