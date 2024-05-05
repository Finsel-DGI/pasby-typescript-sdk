export type versions = 'v2';
export type baseURLs = 'https://l.pasby.africa' | 'https://s.pasby.africa';
export type claims = keyof typeof Claims;

export declare enum FlowActionType {
  login = "login",
  signup = "signup",
  confirm = "confirm",
  link = "link",
  sign = "sign"
}

const Claims = strEnum([
  'bio.birthplace',
  'bio.birthdate',
  'bio.gender',
  'bio.maritalstatus',
  'bio.birthnumber',
  'contact.email',
  'contact.emailVerified',
  'contact.phone',
  'contact.phoneVerified',
  'address.city',
  'address.postcode',
  'address.country',
  'address.place',
  'address.formatted',
  'address.longitude',
  'address.latitude',
  'naming.family',
  'naming.given',
  'naming.title',
  'naming.name',
  'naming.middle',
  'naming.titlePrefix',
  'naming.titleSuffix',
  'naming.nickname',
  'nationality.nationalities',
  'nationality.pep',
  'nationality.primary',
  'nationality.residence',
  'nationality.watchListed',
  'idcards.passport',
  'financial.bvn',
  'financial.bvnBank',
  'financial.bvnLevel',
  'financial.bvnIAT',
]);

function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

/* eslint-disable */
export function parseInterface(data: any) {
  return JSON.parse(JSON.stringify(data));
}