import React, { useState } from 'react';
import './Faq.css';
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaMinus, FaPlus } from 'react-icons/fa';

const Faq = () => {
    const [selected, setSelected] = useState(0); // Initialize with the index of the first item

    const toggle = (i) => {
        setSelected(selected === i ? null : i);
    };

    return (
        <div className='faq'>
            <h1>Frequently asked questions</h1>
            <div className='accordion'>
                {data.map((item, i) => (
                    <div className={selected === i ? 'item show' : 'item'} key={i}>
                        <div className={`title ${selected === i ? 'title-selected' : ''}`} onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected === i ? <FaMinus /> : <FaPlus />}</span>
                        </div>
                        <div className={selected === i ? 'answer show' : 'answer'}>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;

const data = [
    {
        question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?.',
        answer:
            '   Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi, itaque dicta qui similique reprehenderit iste modi impedit eum nihil odit? Alias voluptate nemo et ex illo quo similique!',
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?',
        answer:
            '   Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi, itaque dicta qui similique reprehenderit iste modi impedit eum nihil odit? Alias voluptate nemo et ex illo quo similique!',
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?',
        answer:
            '   Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi, itaque dicta qui similique reprehenderit iste modi impedit eum nihil odit? Alias voluptate nemo et ex illo quo similique!',
    },
];
