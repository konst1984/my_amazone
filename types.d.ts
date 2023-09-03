interface IProductProps {
  _id: number;
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
}
interface IStoreProduct extends IProductProps {
  quantity: number;
}

interface IMenuDataItem {
  title: string;
  list: string[];
}

interface ISideMenuDataItem extends IMenuDataItem {
  nextArrow?: boolean | undefined;
}

interface ISideNextMenuDataItem {
  [key: string]: IMenuDataItem[];
}

interface IResponseData {
  ZipCode: string;
  City: string;
  State: string;
  County: string;
  AreaCode: string;
  CityType: string;
  CityAliasAbbreviation: string;
  CityAliasName: string;
  Latitude: string;
  Longitude: string;
  TimeZone: string;
  Elevation: string;
  CountyFIPS: string;
  DayLightSaving: string;
  PreferredLastLineKey: string;
  ClassificationCode: string;
  MultiCounty: string;
  StateFIPS: string;
  CityStateKey: string;
  CityAliasCode: string;
  PrimaryRecord: string;
  CityMixedCase: string;
  CityAliasMixedCase: string;
  StateANSI: string;
  CountyANSI: string;
  FacilityCode: string;
  CityDeliveryIndicator: string;
  CarrierRouteRateSortation: string;
  FinanceNumber: string;
  UniqueZIPName: string;
  CountyMixedCase: string;
}
