import React from 'react';
import { Mosaic, MosaicNode } from 'react-mosaic-component';
import CompanyInfo from './components/CompanyInfo';
import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Mosaic<string>
        renderTile={(id, path) => (
          <CompanyInfo id={id} path={path} />
        )}
        initialValue={{
          direction: 'row',
          first: 'com_NX6GzO',
          second: {
            direction: 'column',
            first: 'com_agj00z',
            second: 'com_0XLDdX' 
          }
        }}
      />
    </div>
  );
};

export default App;
