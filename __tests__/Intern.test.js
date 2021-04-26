const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Al', 'Smith', '1', 'Al@Smith.com', 'UCLA');

    expect(intern.firstName).toBe('Al');
    expect(intern.lastName).toBe('Smith');
    expect(parseInt(intern.id)).toEqual(expect.any(Number));
    expect(intern.email).toBe('Al@Smith.com');
    expect(intern.school).toBe('UCLA');
});

test("gets Intern's school", () => {
    const intern = new Intern('Al', 'Smith', '1', 'Al@Smith.com', 'UCLA');

    expect(intern.getSchool()).toEqual(expect.stringContaining('UCLA'));
});

test("gets Intern's role", () => {
    const intern = new Intern('Al', 'Smith', '1', 'Al@Smith.com', 'UCLA');

    expect(intern.getRole()).toBe('Intern');
});