export const ContainerFlex = ({col, around, children, ...rest}) =>{

  const myStyle = {
    display: 'flex',
    justifyContent: around  ? 'space-around' : 'space-between',
    alignItems: 'center',
    flexDirection: col ? 'column' : 'row',
  }

  return (
    <div {...rest} style={myStyle}>
      {children}
    </div>
    )
}