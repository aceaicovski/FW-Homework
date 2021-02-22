// function displayDate(day, month, year); // 1, 1, 2021 => 01.01.21, 10, 10, 2021 => 10.10.21
// 	Transformați data transmisă astfel incit fiecare poziție sa aibă 2 cifre.

function displayDate(day, month, year) {
    var dt = new Date(year, month, day);

    year  = dt.getFullYear();
    month = (dt.getMonth() + 1).toString().padStart(2, "0");
    day   = dt.getDate().toString().padStart(2, "0");

    console.log(`${day}${'.'}${month}${'.'}${year}`);
};

displayDate(17, 4, 1994);
displayDate(23, 4, 1991);
displayDate(12, 10, 2018);
