import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs as ReactTabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Map from './Map';

const Tabs = ({ longDescription, floorPlan, location, lat, lng }) => {
  const splitDescription = longDescription ? longDescription.split('||') : [];
  
  return (
    <ReactTabs className="mt-4">
      <TabList>
        <Tab>
          <i className="bi bi-file-text me-2"></i>
          Description
        </Tab>
        <Tab>
          <i className="bi bi-grid-1x2 me-2"></i>
          Floor Plan
        </Tab>
        <Tab>
          <i className="bi bi-geo-alt me-2"></i>
          Map
        </Tab>
      </TabList>

      <TabPanel>
        {splitDescription.map((paragraph, index) => (
          <p key={index} className="mb-3">{paragraph}</p>
        ))}
      </TabPanel>
      <TabPanel>
        <img 
          src={floorPlan} 
          alt="Floor Plan" 
          className="img-fluid rounded"
        />
      </TabPanel>
      <TabPanel>
        <Map location={location} lat={lat} lng={lng} />
      </TabPanel>
    </ReactTabs>
  );
};

export default Tabs;