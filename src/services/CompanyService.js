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
  // eslint-disable-next-line
  const company = fakeCompanies.find(comp => comp.id === id);
  company.numberOfEmployees = number;
}

function updateDomain(id, domain) {
  // eslint-disable-next-line
  const company = fakeCompanies.find(comp => comp.id === id);
  company.domain = domain;
}

function updateSubscriptionsPerEmployee(id, number) {
  // eslint-disable-next-line
  const company = fakeCompanies.find(comp => comp.id === id);
  company.numberOfEmployees = number;
}

export default {
  getAll,
  getById,
  updateEmployeeCount,
  updateDomain,
  updateSubscriptionsPerEmployee,
};
