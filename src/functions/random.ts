



export function getRandomNumber(min: number, max: number) {

    const minimum = Math.ceil(min); 
    const maximum = Math.floor(max); 

    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}