import React, { useState, useEffect } from 'react';

function App() {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://localhost:7103/api/destinations')
            .then(response => response.json())
            .then(data => {
                setDestinations(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <h1 style={{ color: '#0A7075', textAlign: 'center', marginBottom: '30px' }}>Explore Sri Lanka - Travel & Hiking Spots</h1>

            {loading ? (
                <p style={{ textAlign: 'center' }}>Loading destinations...</p>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    {destinations.map(dest => (
                        <div key={dest.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', width: '280px', backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                            <h3 style={{ color: '#333', marginTop: '0' }}>{dest.name}</h3>
                            <p style={{ margin: '8px 0' }}><strong>Category:</strong> {dest.category}</p>
                            <p style={{ margin: '8px 0' }}><strong>District:</strong> {dest.district}</p>
                            <p style={{ margin: '8px 0' }}><strong>Difficulty:</strong> <span style={{ color: dest.difficulty === 'Easy' ? 'green' : 'orange' }}>{dest.difficulty}</span></p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;