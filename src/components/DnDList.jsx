import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDrag, useDrop } from 'react-dnd'

export function DnDList() {
  return <DndProvider backend={HTML5Backend}></DndProvider>
}

function DndItem() {
  const [{ isDragging }, drag] = useDrag(() => ({
    item: { type: 'DND_ITEM' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))
  return <div ref={drag}>Item</div>
}
