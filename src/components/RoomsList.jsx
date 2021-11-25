import { useState, useCallback, useEffect } from 'react';
import { RoomCard } from './RoomCard';
import update from 'immutability-helper';
import { getRooms } from '../helpers/fetchData';
import roomData from '../data/rooms'
const style = {
    width: 400,
};

export const RoomList = () => {
    
        const [cards, setCards] = useState(roomData);

        const moveCard = useCallback((dragIndex, hoverIndex) => {
            const dragCard = cards[dragIndex];
            setCards(update(cards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard],
                ],
            }));
        }, [cards]);
        const renderCard = (card, index) => {
            return (<RoomCard key={card.id} index={index} id={card.id} price={card.price} roomName={card.roomName} moveCard={moveCard}/>);
        };
        return (<>
				<div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
			</>);
    
};