import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = SortableContainer(({colors, removeColor}) => {
   return (
      <div style={{height: '100%'}}>
         {colors.map((col, i) => (
            <DraggableColorBox index={i} handleClick={() => removeColor(col.name)} color={col.color} name={col.name} key={col.name}/>
         ))}
      </div>
   )
})

export default DraggableColorList;
