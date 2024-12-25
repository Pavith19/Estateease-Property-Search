import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCarousel from './ImageCarousel';
import Tabs from './Tabs';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBed, faCalendarAlt, faArrowLeft, faMapMarkerAlt, faMoneyBillAlt, faKey } from '@fortawesome/free-solid-svg-icons';
import { Card, Row, Col, Badge } from 'react-bootstrap';

const PropertyDetails = ({ properties }) => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const foundProperty = properties.find((prop) => prop.id === id);
        setProperty(foundProperty);
    }, [id, properties]);

    const handleGoBack = () => {
        navigate('/');
    };

    if (!property) {
        return (
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    const formatDate = (dateObj) => {
        if (!dateObj || !dateObj.year || !dateObj.month || !dateObj.day) {
            return 'Date not available';
        }
          const monthNames = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
        const monthIndex = monthNames.indexOf(dateObj.month);
      const formattedDate = new Date(dateObj.year, monthIndex, dateObj.day)
        return formattedDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    return (
        <div className="property-details-page">
            <div className="back-button-container">
                <button className="btn btn-light back-button" onClick={handleGoBack}>
                  <FontAwesomeIcon icon={faArrowLeft} className="me-2"/> Back to Home
                </button>
            </div>
            <div className="property-details">
                 <div className="row">
                      <div className="col-lg-6 property-image-section">
                          <div className="p-4">
                            <ImageCarousel images={property.images} />
                         </div>
                     </div>
                    <div className="col-lg-6 d-flex flex-column property-summary-section">
                        <div className="p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <h2 className="text-primary display-6 mb-3 property-title">{property.type.toUpperCase()}</h2>
                                <Badge bg="primary" className="py-2 fs-5">£{property.price.toLocaleString()}</Badge>
                            </div>

                           <div className="property-info-container">
                                <div className="info-item">
                                    <FontAwesomeIcon icon={faHome} className="me-2" />
                                   <span>Type: </span>
                                    <span className="fw-bold">{property.type}</span>
                                </div>
                                  <div className="info-item">
                                      <FontAwesomeIcon icon={faBed} className="me-2" />
                                     <span>Bedrooms: </span>
                                       <span className="fw-bold">{property.bedrooms}</span>
                                  </div>
                                 <div className="info-item">
                                    <FontAwesomeIcon icon={faKey} className="me-2" />
                                    <span>Tenure: </span>
                                      <span className="fw-bold">{property.tenure}</span>
                                </div>
                                 <div className="info-item">
                                        <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                                        <span>Added: </span>
                                        <span className="fw-bold">{formatDate(property.added)}</span>
                                  </div>
                                <div className="info-item">
                                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                                  <span>Location: </span>
                                  <span className="fw-bold">{property.location}</span>
                              </div>
                            </div>
                        </div>
                     <Card.Footer className="bg-light p-0">
                           <Tabs longDescription={property.longDescription} floorPlan={property.floorPlan} location={property.location} lat={property.lat} lng={property.lng} />
                     </Card.Footer>
                   </div>
                </div>
            </div>
        </div>
  );
};

export default PropertyDetails;