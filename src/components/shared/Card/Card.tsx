import React from 'react'
import './Card.scss'

interface CardProps {
  className?: string
}

export const Card: React.FC<CardProps> = ({children, className}) => {
    
  return (
      <div className={`card ${className}`}>
        {children}
      </div>
    );
}