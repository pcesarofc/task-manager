import React from 'react';

const Legend = () => {
    return <div className="legends">
        <div className="not-completed">
            <div className='not-completed-square' />
            <p className="not-completed-text">Em aberto</p>
        </div>
        <div className="completed">
            <div className='completed-square' />
            <p className="completed-text">Concluído</p>
        </div>
    </div>
}

export default Legend;