import React from 'react'
import { MdAdd } from 'react-icons/md'
import Card from '../Card/Card.js'

import { Container } from './Liststyle'
export default function List({ data,index:listIndex }) {
    return (
        <Container done={data.done}>
            <header>
                <h2>{data.title}</h2>
                {data.creatable &&
                    <button type='button'>
                        <MdAdd size={17} color='white' ></MdAdd>
                    </button>
                }

            </header>

            <ul>
                {data.cards.map((cartoes, index) => (<Card key={cartoes.id} data={cartoes} index={index} listIndex={listIndex}/>))}
            </ul>
        </Container>
    )
}
