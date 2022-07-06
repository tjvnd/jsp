const regExp = /(.)\1*/g; 
let first_value = '1';
console.log(`1 : ${first_value}`);
for (let i = 1; i < 10; i++) {
    let sequence = '';
    const result = first_value.match(regExp); 
    for (item of result) { 
        sequence += String(item.length) + item[0]; 
    }
    console.log(`${i + 1} : ${sequence}`); 
    first_value = sequence; 

}