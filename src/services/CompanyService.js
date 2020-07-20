const fakeCompanies = [
  {
    id: 1,
    name: 'Facebook',
    domain: 'facebook.com',
    numberOfEmployees: 10000,
    subscriptionsPerEmployee: 1,
  },
  {
    id: 2,
    name: 'Google',
    domain: 'google.com',
    numberOfEmployees: 85000,
    subscriptionsPerEmployee: 5,
  },
  {
    id: 3,
    name: 'Yahoo',
    domain: 'yahoo.com',
    numberOfEmployees: 62000,
    subscriptionsPerEmployee: 4,
  },
  {
    id: 4,
    name: 'Pax8',
    domain: 'pax8.com',
    numberOfEmployees: 256,
    subscriptionsPerEmployee: 2,
  },
];

function getAll() {
  return Promise.resolve(fakeCompanies);
}

function getById(id) {
  // eslint-disable-next-line
  const company = fakeCompanies.find(company => company.id === id);
  return Promise.resolve(company);
}

function updateEmployeeCount(id, number) {
  const company = getById(id);
  // eslint-disable-next-line
  company.then(v => v.numberOfEmployees = number);
}

function updateDomain(id, domain) {
  const company = getById(id);
  // eslint-disable-next-line
  company.then(v => v.domain = domain);
}

function updateSubscriptionsPerEmployee(id, number) {
  const company = getById(id);
  // eslint-disable-next-line
  company.then(v => v.subscriptionsPerEmployee = number);
}

function isInvalidNumber(n) {
  // eslint-disable-next-line
  return isNaN(n);
}

function isEmptyString(str) {
  return str.length === 0;
}

function isInvalidDomain(str) {
  // eslint-disable-next-line
  const length = str.length;
  const topLevelDomain = str.substr(length - 4);
  return topLevelDomain !== '.com';
}

export default {
  getAll,
  getById,
  isEmptyString,
  isInvalidNumber,
  isInvalidDomain,
  updateDomain,
  updateEmployeeCount,
  updateSubscriptionsPerEmployee,
};
