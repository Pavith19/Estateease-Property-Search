import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';

const PropertyCard = ({ property, onFavorite, isFavorite, onDragStart }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData("application/json", JSON.stringify(property));
        onDragStart(e, property);
    };

    const formatDate = (added) => {
        return `${added.day} ${added.month} ${added.year}`;
    };

    return (
        <div 
            className="col-md-4 mb-4 property-card" 
            draggable="true" 
            onDragStart={handleDragStart}
        >
            <div className="card h-100 shadow">
                <div className="position-relative">
                    <img 
                        src={property.images[0]} 
                        className="card-img-top" 
                        alt={property.description} 
                        style={{ height: '220px', objectFit: 'cover' }}
                    />
                </div>
                <div className="card-body d-flex flex-column p-3">
                    <div className="mb-3">
                        <p className="text-muted mb-2 small">{property.location}</p>
                        
                        <h4 className="text-primary fw-bold mb-2" style={{ letterSpacing: '0.5px' }}>
                            {property.type.toUpperCase()}
                        </h4>

                        <p className="card-text mb-2">{property.description}</p>

                        <h5 className="text-success mb-2">£{property.price.toLocaleString()}</h5>

                        <p className="mb-2">
                            <FontAwesomeIcon icon={faBed} className="me-2" />
                            {property.bedrooms} {property.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
                        </p>
                    </div>

                    <div className="mt-auto">
                        <p className="text-muted small mb-3">
                            Added: {formatDate(property.added)}
                        </p>

                        <div className="d-flex justify-content-between align-items-center">
                            <a href={`/property/${property.id}`} className="btn custom-button" rel="noopener noreferrer">View Details</a>
                            <button className="btn btn-link" onClick={() => onFavorite(property.id)}>
                                <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeartRegular} color={isFavorite ? 'red' : 'black'} size="lg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;