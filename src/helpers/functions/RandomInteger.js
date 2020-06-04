export function randomInteger(min = 5, max = 100)
{
    // min and max included
    // stack overflow article:
    return Math.floor(Math.random() * (max - min + 1) + min)
}