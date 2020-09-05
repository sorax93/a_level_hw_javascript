// Предметная область: продажа ноутбуков
let name1 = 'HP_470_G7';
let name2 = 'Lenovo_IP_L340_17IRH';
let name3 = 'ASUS_M509DJ';
let cpu1 = 'IC_i5_10210U';
let cpu2 = 'IC_i5_9300H';
let cpu3 = 'AMD_Ryzen7_3700U';
let ps1 = 4.2;
let ps2 = 4.1;
let ps3 = 4;
let ram1 = 8;
const ram2 = 16;
const ssd = 512;
let gr1 = 'AMD_radeon_530';
let gr2 = 'Nvidia_GTX_1050';
let gr3 = 'Nvidia_MX_230';
let pr1 = 26999;
let pr2 = 25399;
let pr3 = 18999;
let in_stock1 = true;

let id_1 = {
    Name: name1,
    CPU: cpu1,
    Processor_speed: ps1,
    RAM: ram2,
    SSD: ssd,
    Graphics: gr1,
    Price: pr1,
    Stock_status: in_stock1 ? 'В наличии' : 'Отсутствует'
}

let id_2 = {
    Name: name2,
    CPU: cpu2,
    Processor_speed: ps2,
    RAM: ram2,
    SSD: ssd,
    Graphics: gr2,
    Price: pr2,
    Stock_status: in_stock1 ? 'В наличии' : 'Отсутствует'
}

let id_3 = {
    Name: name3,
    CPU: cpu3,
    Processor_speed: ps3,
    RAM: ram1,
    SSD: ssd,
    Graphics: gr3,
    Price: pr3,
    Stock_status: !in_stock1 ? 'В наличии' : 'Отсутствует'
}

let comp_proc = ps1 > ps3 ? ' процессор мощнее чем ' : ' процессор слабее чем '; 
let special = (pr1 + pr2) * 10 / 100;
let price_diff1 = id_2.Price - id_3.Price;

console.log(id_1);
console.log(id_2);
console.log(id_3);
console.log('У ноутбука ' + id_1.Name + comp_proc + 'у ноутбука ' + id_3.Name);
console.log('При совместной покупке Ноутбука ' + id_1.Name + ' и Ноутбука ' + id_2.Name + ' Вы получите скидку в 10%, которая составит - ' + special + 'грн.');
console.log('Ноутбук ' + id_2.Name + ' стоит дороже Ноутбука ' + id_3.Name + ' на ' + price_diff1 + 'грн.');
console.log('Наличие ноутбуков:' + '\n' + id_1.Name + ' - ' + id_1.Stock_status + '\n' + id_2.Name + ' - ' + id_2.Stock_status + '\n' + id_3.Name + ' - ' + id_3.Stock_status);

