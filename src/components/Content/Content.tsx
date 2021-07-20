import React from 'react'
import { Card } from '../shared/Card/Card'
import './Content.scss'

interface ContentProps {

}

export const Content: React.FC<ContentProps> = () => {
    return (
      <div className="container">
        <div className="content">
          <Card className="today-date-card"/>
          <Card className="today-result-card"/>
          <Card className="results-date-card"/>
          <Card className="transactions-card"/>
          <Card className="balance-card"/>
          <Card className="income-card"/>
          <Card className="outcome-card"/>
          <Card className="summary-card"/>
          <Card className="comments-card"/>
        </div>
      </div>
    );
}