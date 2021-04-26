const Manager = require('../lib/Manager');

test('creates Manager object', () => {
    const manager = new Manager ('Al', 'Smith', '1', 'Al@Smith.com', 'A1');

    expect(manager.firstName).toBe('Al');
    expect(manager.lastName).toBe('Smith');
    expect(parseInt(manager.id)).toEqual(expect.any(Number));
    expect(manager.email).toBe('Al@Smith.com');
    expect(manager.officeNumber).toBe('A1');
});

test("gets Manager's role", () => {
    const manager = new Manager ('Al', 'Smith', '1', 'Al@Smith.com', 'A1');

    expect(manager.getRole()).toBe('Manager');
});