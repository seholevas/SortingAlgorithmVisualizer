import {randomInteger} from "./RandomInteger"
export function generateArray(size = 100, min=10, max=80){
const array = [];

for (let i = 0; i < size; i++)
{
    array.push(randomInteger(min, max))
}
    return array;
}