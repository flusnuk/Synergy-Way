import companiesData from '../companies-lookup.json';

export interface Company {
  ticker: string;
  name: string;
  legalName: string;
  stockExchange: string;
  shortDescription: string;
  longDescription: string;
  website: string;
  businessAddress: string;
  businessPhone: string;
  entityLegalForm: string;
  latestFillingDate: string;
  incCountry: string;
  employees: number;
  sector: string;
  industryCategory: string;
  industryGroup: string;
  theaEnabledtruelegaceSector: string;
  legacyIndustryCategory: string;
  legacyIndustryGroup: string;
}

// Add type for company parameter
export const companies: Company[] = companiesData.map((company: any) => ({
  ticker: company.ticker,
  name: company.name,
  legalName: company.legal_name,
  stockExchange: company.stock_exchange,
  shortDescription: company.short_description,
  longDescription: company.long_description,
  website: company.company_url,
  businessAddress: company.business_address,
  businessPhone: company.business_phone_no,
  entityLegalForm: company.entity_legal_form,
  latestFillingDate: company.latest_filling_date,
  incCountry: company.inc_country,
  employees: company.employees,
  sector: company.sector,
  industryCategory: company.industry_category,
  industryGroup: company.industry_group,
  theaEnabledtruelegaceSector: company.thea_enabled_true_legacy_sector,
  legacyIndustryCategory: company.legacy_industry_category,
  legacyIndustryGroup: company.legacy_industry_group
})); 