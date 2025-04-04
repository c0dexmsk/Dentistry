import React from 'react';
import { Card } from 'react-bootstrap';
import DetailsButton from '../general/DetailsButton';


export default function Case ({name, description, image}) {

    return (
        <section className="case-section">
        <Card className="patient-story-card flex-row w-50 h-100 border-0 shadow-sm overflow-hidden">
            {image && (
            <div className="image-wrapper">
                <Card.Img 
                variant="top" 
                src={image} 
                alt={`Результат лечения пациента ${name}`}
                className="case-image"
                />
            </div>
            )}
        
            <Card.Body className="text-center p-4">
            <div className="story-header mb-3">
                <Card.Title className="h3">{name}</Card.Title>
            </div>
          
            <Card.Text className="story-description mb-4">
                {description}
            </Card.Text>
          
            <DetailsButton
                    title="Подробнее"
            />
        </Card.Body>
      </Card>
    </section>
    )
}