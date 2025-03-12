import React from 'react';
import type { JSX } from 'react';
import { Mosaic } from 'react-mosaic-component';
import CompanyWidget from './CompanyWidget';
import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

const Dashboard: React.FC = () => {
  const ELEMENT_MAP: { [key: string]: JSX.Element } = {
    a: <CompanyWidget ticker="AAPL" />,
    b: <CompanyWidget ticker="MSFT" />,
    c: <CompanyWidget ticker="GOOGL" />
  };

  return (
    <div className="h-screen p-4 bg-gray-100">
      <Mosaic<string>
        renderTile={(id) => ELEMENT_MAP[id]}
        initialValue={{
          direction: 'row',
          first: 'a',
          second: {
            direction: 'column',
            first: 'b',
            second: 'c',
          },
        }}
      />
    </div>
  );
};

export default Dashboard; 