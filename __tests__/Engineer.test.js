const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Al', 'Smith', '1', 'Al@Smith.com', 'MyHub');
    
    expect(engineer.firstName).toBe('Al');
    expect(engineer.lastName).toBe('Smith');
    expect(parseInt(engineer.id)).toEqual(expect.any(Number));
    expect(engineer.email).toBe('Al@Smith.com');
    expect(engineer.github).toBe('MyHub');
});

test("gets Engineer's github", () => {
    const engineer = new Engineer('Al', 'Smith', '1', 'Al.Smith.com', 'MyHub');
    
    expect(engineer.getGithub()).toEqual(expect.stringContaining('MyHub'));
});

test("gets Engineer's role", () => {
    const engineer = new Engineer('Al', 'Smith', '1', 'Al.Smith.com', 'MyHub');

    expect(engineer.getRole()).toBe('Engineer');
});