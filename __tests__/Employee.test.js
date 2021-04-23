const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Jay');

    expect(employee.name).toBe('Jay');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
}); 

