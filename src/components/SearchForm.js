import React, { useState } from 'react';
import 'react-widgets/styles.css';
import { Combobox, NumberPicker, DateTimePicker } from 'react-widgets';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchForm = ({ onSearch }) => {
    const [type, setType] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Infinity);
    const [minBedrooms, setMinBedrooms] = useState(0);
    const [maxBedrooms, setMaxBedrooms] = useState(Infinity);
    const [dateAfter, setDateAfter] = useState(null);
    const [dateBefore, setDateBefore] = useState(null);
    const [postcodeArea, setPostcodeArea] = useState('');

    const handleSearch = () => {
        const filters = {
            type: type.toLowerCase() === "any" ? '' : type.toLowerCase(),
            minPrice: minPrice ? minPrice : 0,
            maxPrice: maxPrice ? maxPrice : Infinity,
            minBedrooms: minBedrooms ? minBedrooms : 0,
            maxBedrooms: maxBedrooms ? maxBedrooms : Infinity,
            dateAfter: dateAfter ? dateAfter.toISOString() : null,
            dateBefore: dateBefore ? dateBefore.toISOString() : null,
            postcodeArea: postcodeArea.toUpperCase(),
        };
        onSearch(filters);
    };

    return (
        <div className="search-hero">
            <div className="search-overlay">
                <div className="search-content">
                    <h1 className="search-title">Find Your Dream Home</h1>
                    <p className="search-subtitle">Discover thousands of properties across the UK</p>
                    
                    <div className="search-form-container">
                        <form className="modern-search-form">
                            <div className="search-row">
                                <div className="search-group">
                                    <label>Property Type</label>
                                    <Combobox
                                        data={['Any', 'House', 'Flat']}
                                        value={type}
                                        onChange={setType}
                                        placeholder="Select Type"
                                    />
                                </div>

                                <div className="search-group price-group">
                                    <label>Price Range</label>
                                    <div className="price-inputs">
                                        <NumberPicker
                                            onChange={setMinPrice}
                                            placeholder="Min Price"
                                            min={1}
                                            max={2000000}
                                        />
                                        <span className="separator">-</span>
                                        <NumberPicker
                                            onChange={setMaxPrice}
                                            placeholder="Max Price"
                                            min={1}
                                            max={2000000}
                                        />
                                    </div>
                                </div>

                                <div className="search-group bedroom-group">
                                    <label>Bedrooms</label>
                                    <div className="bedroom-inputs">
                                        <NumberPicker
                                            onChange={setMinBedrooms}
                                            placeholder="Min"
                                            min={1}
                                            max={50}
                                        />
                                        <span className="separator">-</span>
                                        <NumberPicker
                                            onChange={setMaxBedrooms}
                                            placeholder="Max"
                                            min={1}
                                            max={50}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="search-row">
                                <div className="search-group date-group">
                                    <label>Date Added</label>
                                    <div className="date-inputs">
                                        <DateTimePicker
                                            value={dateAfter}
                                            onChange={setDateAfter}
                                            format="yyyy-MM-dd"
                                            placeholder="From"
                                        />
                                        <span className="separator">-</span>
                                        <DateTimePicker
                                            value={dateBefore}
                                            onChange={setDateBefore}
                                            format="yyyy-MM-dd"
                                            placeholder="To"
                                        />
                                    </div>
                                </div>

                                <div className="search-group">
                                    <label>Postcode Area</label>
                                    <input
                                        type="text"
                                        value={postcodeArea}
                                        onChange={(e) => setPostcodeArea(e.target.value)}
                                        placeholder="Enter Postcode"
                                        className="postcode-input"
                                    />
                                </div>

                                <div className="search-group button-group">
                                    <button type="button" className="search-button" onClick={handleSearch}>
                                        <FontAwesomeIcon icon={faSearch} /> Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchForm;