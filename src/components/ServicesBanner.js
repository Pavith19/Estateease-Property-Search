import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ServicesBanner = () => {
  return (
    <div className="container-fluid py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: '#1e3a8a' }}>Our Services</h2>
          <p className="lead" style={{ color: '#34495e' }}>Making your property search seamless and enjoyable</p>
        </div>
        
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card border-0 h-100 shadow-sm text-center p-4" style={{ transition: 'transform 0.3s ease-in-out' }}>
              <div className="card-body d-flex flex-column">
                <div className="p-3 mb-4 rounded-circle mx-auto" style={{ 
                  width: '90px', 
                  height: '90px', 
                  background: 'linear-gradient(135deg, #00c6ff, #0072ff)',
                  opacity: 0.9 
                }}>
                  <FontAwesomeIcon icon={faSearch} className="text-white" size="2x" style={{ marginTop: '22px' }} />
                </div>
                <h3 className="h4 card-title mb-3 fw-bold" style={{ color: '#1e3a8a' }}>Refined Search</h3>
                <p className="card-text text-muted">
                  Use our advanced filters to find properties that match your exact requirements, from location to specific features.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 h-100 shadow-sm text-center p-4" style={{ transition: 'transform 0.3s ease-in-out' }}>
              <div className="card-body d-flex flex-column">
                <div className="p-3 mb-4 rounded-circle mx-auto" style={{ 
                  width: '90px', 
                  height: '90px', 
                  background: 'linear-gradient(135deg, #0072ff, #00c6ff)',
                  opacity: 0.9 
                }}>
                  <FontAwesomeIcon icon={faHeart} className="text-white" size="2x" style={{ marginTop: '22px' }} />
                </div>
                <h3 className="h4 card-title mb-3 fw-bold" style={{ color: '#1e3a8a' }}>Save Favourites</h3>
                <p className="card-text text-muted">
                  Create your personal collection of favourite properties to easily compare and revisit them anytime.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 h-100 shadow-sm text-center p-4" style={{ transition: 'transform 0.3s ease-in-out' }}>
              <div className="card-body d-flex flex-column">
                <div className="p-3 mb-4 rounded-circle mx-auto" style={{ 
                  width: '90px', 
                  height: '90px', 
                  background: 'linear-gradient(135deg, #00c6ff, #0072ff)',
                  opacity: 0.9 
                }}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" size="2x" style={{ marginTop: '22px' }} />
                </div>
                <h3 className="h4 card-title mb-3 fw-bold" style={{ color: '#1e3a8a' }}>Interactive Map</h3>
                <p className="card-text text-muted">
                  Visualize property locations and explore nearby amenities with our interactive map feature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;