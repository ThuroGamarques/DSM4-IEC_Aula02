function soma(a, b)
{
    return parseFloat((a + b).toFixed(2));
}

function prod(a, b)
{
    return a * b;
}

function raza(a, b)
{
    return a / b;
}

module.exports = {soma, prod, raza};