

const round = (value: number, places: number) => {

    const power = 10 ** places;
    return Math.round((value + Number.EPSILON) * power) / power;
}

export { round };

