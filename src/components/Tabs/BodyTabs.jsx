import React from 'react'; 

export const BodyTabs = ({ activeTabs, myId, children, ...rest }) => {
  if(activeTabs !== myId) return null
  return ( 
    <div {...rest}>{children}</div>
  )
}