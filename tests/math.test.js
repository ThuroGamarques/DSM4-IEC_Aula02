const math = require('../math');

test('Soma 2 + 3 = 5', () =>
{
    expect(math.soma(2, 3)).toBe(5);
});

test('Diferença 1.4 + 1.45 = 2.85', () =>
{
    expect(math.dife(1.4, 1.45)).toBe(-0.05);
});

test('Produto 190293 * 292091 = 55582872663', () =>
{
    expect(math.prod(190293, 292091)).toBe(55582872663);
});

test('Razão 0 / 0 = ?', () =>
{
    expect(math.raza(0, 0)).toBe(NaN);
});