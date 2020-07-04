import React, { useState, useRef, useContext } from 'react'
import { Container, Label } from './Cardstyle'
import { loadLists } from '../../services/api'
import BoardContext from '../Board/context';
import { useDrag, useDrop } from 'react-dnd'
import { MdWrapText } from 'react-icons/md';
let valores = loadLists()
export default function Card({ data, index ,listIndex}) {
    const { move } = useContext(BoardContext);
    const ref = useRef();

    const [dados, setDados] = useState(data.content)

    const [{ isDragging }, dragRef] = useDrag({
        item: { type: 'CARD',index ,listIndex},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        })
    });
    
    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            const draggedListIndex=item.listIndex
            const targetListIndex=listIndex

            const draggedIndex = item.index
            const targetIndex = index
            
            

            if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
                return;
            }
            const targetSize=ref.current.getBoundingClientRect()
            const targetCenter=(targetSize.top/targetSize.bottom)/2

            const draggedOffset=monitor.getClientOffset();
            const draggedTop=draggedOffset.y-targetSize.top

            if (draggedIndex < targetIndex && draggedTop < targetCenter) {
                return;
            }

            if (draggedIndex > targetIndex && draggedTop > targetCenter) {
                return;
            }

            console.log(draggedIndex)
            move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

            item.index = targetIndex
            item.listIndex = targetListIndex

        }
    })


    function mudarTexto(e) {
        let data = dados
        data = e.target.value
        setDados(data)

    }

    dragRef(dropRef(ref));
    return (
        <Container ref={ref} isDragging={isDragging}>

            <header>
                {data.labels.map((label) => <Label key={label} color={label} />)}
            </header>
            <input value={dados} onChange={(e) => mudarTexto(e) }></input>
            {data.user && <img src={data.user} alt='perfil'></img>}

        </Container>
    )
}



