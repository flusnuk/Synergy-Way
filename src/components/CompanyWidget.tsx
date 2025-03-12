import React from 'react';
import { Select } from "@blueprintjs/select";
import { Button, MenuItem } from "@blueprintjs/core";
import { Company, companies } from '../data/companies';

interface CompanyWidgetProps {
  ticker?: string;
  onTickerChange?: (ticker: string) => void;
}

const CompanySelect = Select.ofType<Company>();

const CompanyWidget: React.FC<CompanyWidgetProps> = ({ ticker = 'AAPL', onTickerChange }) => {
  const [selectedCompany, setSelectedCompany] = React.useState<Company | null>(
    companies.find(c => c.ticker === ticker) || null
  );

  const renderCompany = (company: Company, { handleClick }: { handleClick: (event: any) => void }) => (
    <MenuItem
      key={company.ticker}
      text={`${company.ticker} - ${company.name}`}
      onClick={handleClick}
    />
  );

  const onCompanySelect = (company: Company) => {
    setSelectedCompany(company);
    onTickerChange?.(company.ticker);
  };

  if (!selectedCompany) {
    return <div className="p-4">No company selected</div>;
  }

  return (
    <div className="h-full p-4 bg-white shadow-lg rounded-lg overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Company Information</h2>
        <CompanySelect
          items={companies}
          itemRenderer={renderCompany}
          onItemSelect={onCompanySelect}
          filterable={false}
        >
          <Button text={`${selectedCompany.ticker} - ${selectedCompany.name}`} rightIcon="double-caret-vertical" />
        </CompanySelect>
      </div>
      
      <div className="space-y-3">
        {[
          { label: 'Ticker', value: selectedCompany.ticker },
          { label: 'Name', value: selectedCompany.name },
          { label: 'Legal Name', value: selectedCompany.legalName },
          { label: 'Stock Exchange', value: selectedCompany.stockExchange },
          { label: 'Short Description', value: selectedCompany.shortDescription },
          { label: 'Long Description', value: selectedCompany.longDescription },
          { label: 'Website', value: selectedCompany.website },
          { label: 'Business Address', value: selectedCompany.businessAddress },
          { label: 'Business Phone', value: selectedCompany.businessPhone },
          { label: 'Entity Legal Form', value: selectedCompany.entityLegalForm },
          { label: 'Latest Filling Date', value: selectedCompany.latestFillingDate },
          { label: 'Inc Country', value: selectedCompany.incCountry },
          { label: 'Employees', value: selectedCompany.employees },
          { label: 'Sector', value: selectedCompany.sector },
          { label: 'Industry Category', value: selectedCompany.industryCategory },
          { label: 'Industry Group', value: selectedCompany.industryGroup },
          { label: 'Thea Enabled True Legacy Sector', value: selectedCompany.theaEnabledtruelegaceSector },
          { label: 'Legacy Industry Category', value: selectedCompany.legacyIndustryCategory },
          { label: 'Legacy Industry Group', value: selectedCompany.legacyIndustryGroup }
        ].map(({ label, value }) => 
          value ? (
            <div key={label} className="flex">
              <label className="font-semibold min-w-[200px]">{label}:</label>
              <div className={label.includes('Description') ? 'text-sm' : ''}>
                {typeof value === 'number' ? value.toLocaleString() : value}
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default CompanyWidget; 