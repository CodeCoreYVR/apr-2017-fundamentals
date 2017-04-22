const year = parseInt(prompt('What is the year of your car?'));

if(year > 2017) {
 alert('Future');
} else if(year === 2017) {
 alert('New');
} else if(year > 2012) {
 alert('Old');
} else {
 alert('Very old');
}
