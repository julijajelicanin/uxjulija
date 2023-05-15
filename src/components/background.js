
import React, { useEffect, useState } from 'react';

import './background.css';

const MeshGradient = () => {
    const [gradientPositions, setGradientPositions] = useState([0, 1, 2, 3]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setGradientPositions((prevPositions) => {
          const updatedPositions = [...prevPositions];
          const lastPosition = updatedPositions.pop();
          updatedPositions.unshift(lastPosition);
          return updatedPositions;
        });
      }, 400); // Change the interval duration as needed
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="mesh-gradient">
        {/* {gradientPositions.map((position) => (
          <div key={position} className={`radial-gradient position-${position}`} />
        ))} */}
        <div className={'radial-gradient'} />
      </div>
    );
  }

export default MeshGradient;