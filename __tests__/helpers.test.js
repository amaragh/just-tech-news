const { format_date, format_plural, format_url } = require('../utils/helpers')

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
});

test('format_plural() correctly pluralizes words', () => {
    const animal1 = "Tiger";
    const amount1 = 2;

    const animal2 = "Lion";
    const amount2 = 1;

    expect(format_plural(animal1, amount1)).toBe("Tigers");
    expect(format_plural(animal2, amount2)).toBe("Lion");

});

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});