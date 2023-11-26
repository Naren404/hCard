import { ReactNode } from 'react'
import './index.css'

type GridProps = {
  cols: number,
  children: ReactNode,
  direction?: 'column' | 'row',
}

const Grid = (props: GridProps) => {
  const {cols, children, direction = 'column'} = props

  const gridStyle = {
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    flexDirection: direction,
    
  };

  return ( 
    <div className='grid' style={gridStyle}>
      {children}
    </div>
   );
}
 
export default Grid;