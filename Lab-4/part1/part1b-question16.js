let statistics = {
    redCars:    21, //print
    blueCars:   45, //print
    greenCars:  12,
    raceCars:   05, //print
    blackCars:  40,
    rareCars:   02  //print
};

for (const val in statistics) {
    let v = statistics[val];
    if(val[0] == 'r' || v % 2 != 0) {
        console.log(v)
    }
}