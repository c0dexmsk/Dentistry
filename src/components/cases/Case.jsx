import React from 'react';
import { Card } from 'react-bootstrap';
import DetailsButton from '../general/DetailsButton';
import Zainap from "assets/ZainapHistory.png"

export default function Case ({name, description, image}) {

    return (
        <Card className="patient-story-card flex-row h-100 border-0 shadow-sm overflow-hidden ">
            {(
            <div className="image-wrapper">
                <Card.Img
                variant="top"
                src={image}
                alt={`Результат лечения пациента. ${name}`}
                className="case-image"
                />
            </div>
            )}

            <Card.Body className="text-left p-4">
            <div className="story-header mb-3">
                <Card.Title>{name}</Card.Title>
            </div>

            <Card.Text className="story-description mb-4 text-left">
                {description}
            </Card.Text>

            <DetailsButton
                title="Подробнее"
                link="history"
            />
        </Card.Body>
      </Card>
    )
}