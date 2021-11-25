import React from 'react'
import { RoomList } from '../RoomsList'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import  styled  from 'styled-components'

const RoomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 50px;
`

export default function Room() {
    return (
        <RoomContainer >
            <DndProvider backend={HTML5Backend}>
				<RoomList />
            </DndProvider>
        </RoomContainer>
    )
}