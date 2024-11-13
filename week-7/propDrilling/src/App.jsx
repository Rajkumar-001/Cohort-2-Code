import React from 'react';
import PropTypes from 'prop-types';

const e1 = [
  { name: 'RajkumarPandey', department: 'HR', salary: 80000, experience: 6 },
  { name: 'Brajesh Sir', department: 'Finance', salary: 60000, experience: 3 },
];

const e2 = [
  { name: 'Shubham', department: 'Pandey', salary: 90000, experience: 8 },
  { name: 'Emma', department: 'Marketing', salary: 75000, experience: 7 },
];

const mergedEmployees = [...e1, ...e2];


function HrDepartment() {
  return (
    <div>
      <h3>HR Department</h3>
      <ul>
        {mergedEmployees.filter(employee => employee.department === 'HR').map((employee, index) => (
          <li key={index}>
            {employee.name} - {employee.department} - ${employee.salary} - {employee.experience} years
          </li>
        ))}
      </ul>
    </div>
  );
}


function HighSalary() {
  return (
    <div>
      <h3>High Salary Employees</h3>
      <ul>
        {mergedEmployees.filter(employee => employee.salary > 50000).map((employee, index) => (
          <li key={index}>
            {employee.name} - {employee.department} - ${employee.salary} - {employee.experience} years
          </li>
        ))}
      </ul>
    </div>
  );
}


function SortSalary() {
  return (
    <div>
      <h3>Sorted Employees by Salary</h3>
      <ul>
        {mergedEmployees.sort((a, b) => a.salary - b.salary).map((employee, index) => (
          <li key={index}>
            {employee.name} - {employee.department} - ${employee.salary} - {employee.experience} years
          </li>
        ))}
      </ul>
    </div>
  );
}


function EngDep() {
  return (
    <div>
      <h3>Engineering Department</h3>
      {mergedEmployees.some(employee => employee.department === 'Engineering') ? 'Yes' : 'No'}
    </div>
  );
}


function HomePage() {
  return (
    <div>
      <h1 style={{
        textAlign: 'center',
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '10px'
      }}>React Developer Vacancy</h1>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Cart title="Frontend Developer" company="Tech Corp" location="Remote" />
        <Cart title="Backend Developer" company="Innovative Ltd" location="new York" />
        <Cart title="Node js Develper" company="Infosys" location="india" />
        <Cart title="Python Develper" company="TCS" location="Remote" />
      </div>
    </div>
  );
}


function Cart({ title, company, location }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px', flex: '1' }}>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <h4>{location}</h4>
      <button onClick={() => alert(`Applied for the ${title} job`)}>Apply</button>
    </div>
  );
}

Cart.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

function App() {
  return (
    <div>
      <h1>CA1 </h1>
      <HrDepartment />
      <HighSalary />
      <SortSalary />
      <EngDep />
      <HomePage />
    </div>
  );
}

export default App;
