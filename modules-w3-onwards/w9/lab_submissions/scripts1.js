let start = new Date();

const stopTime = () => {
    let stop = new Date();

    let currentTime = stop.getTime();
    console.log(currentTime);
    let stopTime = start.getTime();
    console.log(stopTime);
    let diff = (currentTime - stopTime) / 600;

    alert("You have been on the page for : " + diff + " seconds.");


}
