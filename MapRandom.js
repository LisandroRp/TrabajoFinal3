const MapRandom = async () => { 
    let cant = +process.argv[2];
    let max = 1001
    let min = 1
    let number = null
    let mapRandom = new Map();
    let repetitions = null;
    for (let i = 0; i < cant; i++){
        number = Math.floor(Math.random() * (max - min)) + min;
        repetitions = mapRandom.get(number);
        if(repetitions)
            mapRandom.set(number, repetitions+1)
        else
            mapRandom.set(number, 1)
    }
    const map = Array.from(mapRandom, ([number, repetition]) => ({ number, repetition }));
    return map;
}
process.send(await MapRandom());