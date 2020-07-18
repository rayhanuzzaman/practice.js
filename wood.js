function woodCalculator(chair,table,bed){
    const chairCount = chair * 1;
    const tableCount = table * 2;
    const bedCount = bed * 3;
    const totalWood = chairCount + tableCount + bedCount;
    return totalWood;

}
let woodResult = woodCalculator(5,7,2);
console.log(woodResult);