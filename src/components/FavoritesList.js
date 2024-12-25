import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const FavoritesList = ({ favorites, onRemoveFavorite, onClearFavorites, isDragging, onAddFavorite }) => {
    const navigate = useNavigate();

    const handleDragOver = (e) => {
        e.preventDefault();
        e.currentTarget.classList.add('drag-over');
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.currentTarget.classList.remove('drag-over');
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.currentTarget.classList.remove('drag-over');
        
        try {
            const propertyData = JSON.parse(e.dataTransfer.getData("application/json"));
            if (propertyData && propertyData.id) {
                onAddFavorite(propertyData.id);
            }
        } catch (error) {
            console.error("Error processing dropped property:", error);
        }
    };

    const handleItemDragStart = (e, property) => {
        e.dataTransfer.setData("favoriteId", property.id);
        e.currentTarget.classList.add('dragging');
    };

    const handleItemDragEnd = (e) => {
        e.currentTarget.classList.remove('dragging');
    };

    const handleItemDrag = (e) => {
        const favoriteItem = e.currentTarget;
        const favoritesList = favoriteItem.closest('.favorites-list');
        
        const isOutside = (e) => {
            const rect = favoritesList.getBoundingClientRect();
            return (
                e.clientX < rect.left ||
                e.clientX > rect.right ||
                e.clientY < rect.top ||
                e.clientY > rect.bottom
            );
        };

        if (isOutside(e)) {
            const propertyId = favoriteItem.dataset.propertyId;
            onRemoveFavorite(propertyId);
        }
    };

    const handlePropertyClick = (propertyId, e) => {
        // Prevent navigation if clicking the delete button
        if (e.target.closest('.delete-button')) {
            return;
        }
        navigate(`/property/${propertyId}`);
    };

    return (
        <div 
            className={`favorites-list ${isDragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{
                padding: '1rem',
                border: '2px dashed #ccc',
                borderRadius: '8px',
                minHeight: '200px',
                backgroundColor: isDragging ? '#f8f9fa' : 'white',
                transition: 'all 0.3s ease'
            }}
        >
            <h3>Favorites</h3>
            {favorites.length > 0 ? (
                <ul className="list-group">
                    {favorites.map((property) => (
                        <li 
                            key={property.id} 
                            className="list-group-item d-flex justify-content-between align-items-center"
                            draggable="true"
                            data-property-id={property.id}
                            onDragStart={(e) => handleItemDragStart(e, property)}
                            onDragEnd={handleItemDragEnd}
                            onDrag={handleItemDrag}
                            onClick={(e) => handlePropertyClick(property.id, e)}
                            style={{
                                cursor: 'pointer',
                                transition: 'background-color 0.2s ease',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
                        >
                            <span className="flex-grow-1">
                                {property.type.toUpperCase()} - {property.description}
                            </span>
                            <button 
                                className="btn btn-danger btn-sm delete-button"
                                onClick={() => onRemoveFavorite(property.id)}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-muted">
                    Drag properties here to add to favorites
                </p>
            )}
            {favorites.length > 0 && (
                <button 
                    className="btn btn-secondary btn-sm mt-2" 
                    onClick={onClearFavorites}
                >
                    Clear Favorites
                </button>
            )}
        </div>
    );
};

export default FavoritesList;