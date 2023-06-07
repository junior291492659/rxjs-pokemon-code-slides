import React from 'react';

export default () => {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2c3e50',
            flexDirection: 'column',
        }}>
            <span style={{
                fontSize: '150px',
                fontWeight: 'bold',
                color: '#bdc3c7',
                textShadow: '1px 1px 2px #eee'
            }}>
                Cool!
            </span>
        </div>
    )
}