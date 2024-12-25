import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';
import SearchForm from './components/SearchForm';
import PropertyCard from './components/PropertyCard';
import FavoritesList from "./components/FavoritesList";
import propertiesData from './data/properties.json';
import Footer from './components/Footer';
import ContactForm from './components/ServicesBanner';

function App() {
    const [properties] = useState(propertiesData);
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const [favorites, setFavorites] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const handleSearch = (filters) => {
        const filtered = properties.filter(property => {
            const typeMatch = !filters.type || property.type.toLowerCase().includes(filters.type);
            const priceMatch = property.price >= filters.minPrice && property.price <= filters.maxPrice;
            const bedroomMatch = property.bedrooms >= filters.minBedrooms && property.bedrooms <= filters.maxBedrooms;
            const dateMatch = (!filters.dateAfter || (property.added && new Date(property.added.year, getMonthNumber(property.added.month), property.added.day) >= new Date(filters.dateAfter))) &&
                (!filters.dateBefore || (property.added && new Date(property.added.year, getMonthNumber(property.added.month), property.added.day) <= new Date(filters.dateBefore)));
            const postcodeMatch = !filters.postcodeArea || property.location.toUpperCase().includes(filters.postcodeArea);
            return typeMatch && priceMatch && bedroomMatch && dateMatch && postcodeMatch;
        });
        setFilteredProperties(filtered);
    };

    const handleFavorite = (propertyId) => {
        const property = properties.find((prop) => prop.id === propertyId);
        const isAlreadyFavorite = favorites.some((fav) => fav.id === propertyId);

        if (isAlreadyFavorite) {
            handleRemoveFavorite(propertyId);
        } else {
            handleAddFavorite(propertyId);
        }
    };

    const handleAddFavorite = (propertyId) => {
        const property = properties.find((prop) => prop.id === propertyId);
        if (property && !favorites.some(fav => fav.id === propertyId)) {
            setFavorites([...favorites, property]);
        }
    };

    const handleRemoveFavorite = (propertyId) => {
        const newFavorites = favorites.filter((fav) => fav.id !== propertyId);
        setFavorites(newFavorites);
    };

    const handleClearFavorites = () => {
        setFavorites([]);
    };

    const isPropertyFavorite = (propertyId) => {
        return favorites.some((fav) => fav.id === propertyId);
    };

    const handleDragStart = (e, property) => {
        e.dataTransfer.setData("propertyId", property.id);
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const getMonthNumber = (monthName) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        return monthNames.indexOf(monthName);
    }

    return (
        <div className="app-container">
            <div className="search-container">
                <SearchForm onSearch={handleSearch} />
            </div>
            <div className="search-page">
                <div className="results-container">
                    <div className="row">
                        {filteredProperties.length > 0 ? (
                            filteredProperties.map((property) => (
                                <PropertyCard
                                    key={property.id}
                                    property={property}
                                    onFavorite={handleFavorite}
                                    isFavorite={isPropertyFavorite(property.id)}
                                    onDragStart={handleDragStart}
                                />
                            ))
                        ) : (
                            <div className="col-12 text-center p-5">
                                <div className="mb-4">
                                    <i className="bi bi-search text-muted" style={{ fontSize: '3rem' }}></i>
                                </div>
                                <h3 className="h4 mb-3">We couldn't find what you're looking for right now</h3>
                                <p className="text-muted">Try adjusting your search filters or exploring different criteria</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="favorites-container">
                    <FavoritesList
                        favorites={favorites}
                        onRemoveFavorite={handleRemoveFavorite}
                        onClearFavorites={handleClearFavorites}
                        isDragging={isDragging}
                        onAddFavorite={handleAddFavorite}
                        onDragEnd={handleDragEnd}
                    />
                </div>
            </div>
            <ContactForm />
            <Footer />
        </div>
    );
}

export default App;