async function start() {
    const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    const json = await res.json();

    console.log(json);
}

start();