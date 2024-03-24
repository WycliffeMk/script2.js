function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsLimit = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
        return;
    }

    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints >= demeritPointsLimit) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${demeritPoints}`);
    }
}
checkSpeed(80);