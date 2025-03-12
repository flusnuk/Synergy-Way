import React, { useState } from 'react';
import { MosaicBranch, MosaicWindow, MosaicNode } from 'react-mosaic-component';
import Select from 'react-select';

import companiesData from '../companies-lookup.json';
import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import { CustomExpandButton } from './buttons/CustomExpandButton';
import { CustomRemoveButton } from './buttons/CustomRemoveButton';
import { CustomSplitButton } from './buttons/CustomSplitButton';

interface CompanyInfoProps {
  id: string;
  path: MosaicBranch[];
}

interface Company {
  id: string;
  ticker: string;
  name: string;
  legal_name: string;
  stock_exchange: string;
  short_description: string;
  long_description: string;
  company_url: string;
  business_address: string;
  business_phone_no: string;
  entity_legal_form: string | null;
  latest_filing_date: string | null;
  inc_country: string;
  employees: number;
  sector: string;
  industry_category: string;
  industry_group: string;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ id, path }) => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(
    companiesData.find(company => company.id === id) || null
  );

  const companyOptions = companiesData.map(company => ({
    value: company.id,
    label: `${company.ticker} - ${company.name}`
  }));

  const handleCompanyChange = (option: any) => {
    const company = companiesData.find(c => c.id === option.value);
    setSelectedCompany(company || null);
  };

  const customSelectStyles = {
    control: (base: any) => ({
      ...base,
      minHeight: '30px',
      height: '30px',
      backgroundColor: '#f9fafb',
      border: '1px solid #e5e7eb',
      boxShadow: 'none',
      cursor: 'pointer',
      '&:hover': {
        border: '1px solid #d1d5db'
      },
      '@media (max-width: 640px)': {
        minWidth: '150px',
      },
    }),
    valueContainer: (base: any) => ({
      ...base,
      padding: '0 6px',
      height: '30px',
      cursor: 'pointer',
      '@media (max-width: 640px)': {
        fontSize: '12px',
      },
    }),
    input: (base: any) => ({
      ...base,
      cursor: 'pointer',
      caretColor: 'transparent',
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      padding: '0 4px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      cursor: 'pointer',
    }),
    menu: (base: any) => ({
      ...base,
      zIndex: 100,
      width: 'max-content',
      minWidth: '100%',
      maxWidth: '350px',
    }),
    menuList: (base: any) => ({
      ...base,
      maxHeight: '200px',
    }),
    option: (base: any) => ({
      ...base,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      padding: '8px 12px',
      cursor: 'pointer',
    })
  };

  const toolbarControls = React.useMemo(() => (
    <div className="flex items-center gap-2 w-full px-2 h-[30px]">
      <div className="flex-1 min-w-0 h-full">
        <Select
          value={selectedCompany ? {
            value: selectedCompany.id,
            label: `${selectedCompany.ticker} - ${selectedCompany.name}`
          } : null}
          options={companyOptions}
          onChange={handleCompanyChange}
          className="w-full max-w-[350px] sm:max-w-none h-full"
          styles={customSelectStyles}
        />
      </div>
      <div className="flex gap-1 shrink-0 h-full items-center">
        <CustomSplitButton />
        <CustomExpandButton />
        <CustomRemoveButton />
      </div>
    </div>
  ), [selectedCompany, companyOptions]);

  const companyFields = [
    { key: 'ticker', label: 'Ticker' },
    { key: 'name', label: 'Name' },
    { key: 'legal_name', label: 'Legal name' },
    { key: 'stock_exchange', label: 'Stock exchange' },
    { key: 'short_description', label: 'Short description' },
    { key: 'long_description', label: 'Long description' },
    { key: 'company_url', label: 'Web', isUrl: true },
    { key: 'business_address', label: 'Business address' },
    { key: 'business_phone_no', label: 'Business phone' },
    { key: 'entity_legal_form', label: 'Entity legal form' },
    { key: 'latest_filing_date', label: 'Latest filing date' },
    { key: 'employees', label: 'Employees', format: (val: number) => val?.toLocaleString() },
    { key: 'sector', label: 'Sector' },
    { key: 'industry_category', label: 'Industry category' },
    { key: 'industry_group', label: 'Industry group' },
  ];

  const createNode = React.useCallback((): MosaicNode<string> => {
    return `com_${Math.random().toString(36).substr(2, 6)}`;
  }, []);

  return (
    <MosaicWindow<string>
      path={path}
      createNode={createNode}
      title={selectedCompany ? `${selectedCompany.ticker} - ${selectedCompany.name}` : 'Select Company'}
      toolbarControls={toolbarControls}
      draggable={true}
      className="text-left"
    >
      <div className="h-full overflow-auto text-left">
        {selectedCompany ? (
          <div className="flex flex-col">
            {companyFields.map((field) => (
              <div key={field.key} className="flex flex-col sm:flex-row px-2 sm:px-4 py-2 border-b even:bg-gray-50 text-left">
                <span className="w-full sm:w-36 text-gray-600 font-medium mb-1 sm:mb-0 text-left">{field.label}:</span>
                {field.isUrl ? (
                  <a
                    href={`https://${selectedCompany[field.key as keyof Company]}`}
                    className="text-blue-600 hover:underline break-all text-left"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedCompany[field.key as keyof Company]}
                  </a>
                ) : (
                  <span className="break-words text-left">
                    {field.format
                      ? field.format(selectedCompany[field.key as keyof Company] as any)
                      : selectedCompany[field.key as keyof Company]}
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="p-4 text-left">Please select a company</p>
        )}
      </div>
    </MosaicWindow>
  );
};

export default CompanyInfo; 