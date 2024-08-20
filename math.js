function soma(a, b)
{
    return parseFloat((a + b).toFixed(2));
}

function dife(a, b)
{
    return parseFloat((a - b).toFixed(2));
}

function prod(a, b)
{
    return parseFloat((a * b).toFixed(2));
}

function raza(a, b)
{
    return parseFloat((a / b).toFixed(2));
}

module.exports = {soma, dife, prod, raza};