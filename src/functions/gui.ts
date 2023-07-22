


export function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

export function getRandomNumber(min: number, max: number) {

    const minimum = Math.ceil(min); 
    const maximum = Math.floor(max); 

    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}

export function round(value: number, places: number) {
    const power = 10 ** places;
    return Math.round((value + Number.EPSILON) * power) / power;
}

