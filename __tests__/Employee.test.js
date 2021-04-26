const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Al', 'Smith', '1', 'Al@Smith.com');

    expect(employee.firstName).toBe('Al');
    expect(employee.lastName).toBe('Smith');
    expect(parseInt(employee.id)).toEqual(expect.any(Number));
    expect(employee.email).toBe('Al@Smith.com');
}); 

test("gets Employee's name", () => {
    const employee = new Employee('Al', 'Smith', '1', 'Al@Smith.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Al', 'Smith'));
});

test("gets Employee's id", () => {
    const employee = new Employee('Al', 'Smith', '1', 'Al@Smith.com');

    expect(employee.getId()).toEqual(expect.stringContaining('1'));
});

test("gets Employee's email", () => {
    const employee = new Employee('Al', 'Smith', '1', 'Al@Smith.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('Al@Smith.com'))
});

test("gets Employee's role", () => {
    const employee = new Employee('Al', 'Smith', '1', 'Al@Smith.com');

    expect(employee.getRole()).toBe('Employee');
});