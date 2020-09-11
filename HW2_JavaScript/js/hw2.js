alert("task-1");

var color = prompt("Введите цвет","");

if ((color == "red") || (color =="black")) {
    document.write("<div style='background-color: red;'>красный</div>");
    document.write("<div style='background-color: black; color: white;'>черный</div>");  
} 
else if ((color == "blue") || (color =="green")) {
    document.write("<div style='background-color: blue;'>синий</div>");
    document.write("<div style='background-color: green;'>зеленый</div>");
}
else {
    document.write("<div style='background-color: gray;'>Я не понял</div>");
}

// alert("task-2");

// var age = prompt("Сколько вам лет?","");

// if ((age < 0) || (age>100)){
//     alert("Неправильное Значение");
// }
// else {
//     alert("Вам: " + age + " лет")
// }

// alert("task-3");

// var month = prompt("Enter the month","");
// switch (month){
//     case "january": alert("31 days");
//         break;
//     case "february": alert("29 days");
//         break;
//     case "march": alert("31 days");
//         break;
//     case "april": alert("30 days");
//         break;
//     case "may": alert("31 days");
//         break;
//     case "june": alert("30 days");
//         break;
//     case "july": alert("31 days");
//         break;
//     case "august": alert("31 days");
//         break;
//     case "september": alert("30 days");
//         break;
//     case "october": alert("31 days");
//         break;
//     case "november": alert("30 days");
//         break;
//     case "december": alert("31 days");
//         break;
//     default: alert("Wrong month");
// }

// alert("task-4");

// var age = prompt("Сколько вам лет?","");

// var message = (age < 6) ? 'Здравствуй, малыш!' :
//   (age < 16) ? 'Привет, школьник!' :
//   (age < 24) ? 'Привет, студент!' :
//   (age < 60) ? 'Приветствуем Вас!' :
//   (age < 90) ? 'Здравствуй, уважемый пенсионер!' :
//   'Здравствуйте, долгожитель!';

// alert( message );

// alert("task-5");

// var age = prompt("Сколько вам лет?","");

// var message = (age < 6) ? 'Здравствуй, малыш! Сегодня прекрасное утро!' :
//   (age < 16) ? 'Привет, школьник! Сегодня будет пасмурно!' :
//   (age < 24) ? 'Привет, студент! Сегодня пятница!' :
//   (age < 60) ? 'Приветствуем Вас! Сегодня хороший день!' :
//   (age < 80) ? 'Здравствуй, уважемый пенсионер! Сегодня прекрасный вечер!' :
//   'Здравствуйте, долгожитель! Сегодня солнечное утро!';

// alert( message );

// alert("task-6");
// var htmlData = {
//     "tagName": "body",
//     "subTags": [
//         {
//             "tagName": "div",
//             "subTags": [
//                 {
//                     "tagName": "span",
//                     "text": "Enter a data please:"
//                 },
//                 {
//                     "tagName": "br"
//                 },
//                 {
//                     "tagName": "input",
//                     "attrs": {
//                         "type" : "text",
//                         "id" : "name"
//                     }
//                 },
//                 {
//                     "tagName": "input",
//                     "attrs": {
//                         "type": "text",
//                         "id": "surname"
//                     }    
//                 }
//             ]
//         },
//         {
//             "tagName": "div",
//             "subTags": [
//                 {
//                     "tagName": "button",
//                     "text": "OK",
//                     "attrs": {
//                         "id": "ok"
//                     }
//                 },
//                 {
//                     "tagName": "button",
//                     "text": "Cancel",
//                     "attrs": {
//                         "id": "cancel"
//                     }
//                 }
//             ]
//         }
//     ]
// };
// console.log(htmlData);

// alert("task-7");

// var notebook = {
//     brand: prompt("Enter brand"),
//     type:  prompt("Enter type"),
//     model: prompt("Enter model"),
//     ram: prompt("Enter ram"),
//     size: prompt("Enter size"),
//     weight: prompt("Enter weight"),
//     resolution: {
//         width: prompt("Enter width"),
//         height: prompt("Enter height"),
//     },
// };
// alert('brand: ' + notebook.brand + '\n' + 'type: ' + notebook.type + '\n' + 'model: ' + notebook.model + '\n' + 'ram: ' + notebook.ram + '\n' + 'size: ' + notebook.size + '\n' + 'weight: ' + notebook.weight + '\n' + 'resolution height: ' + notebook.resolution.height + '\n' + 'resolution width: ' + notebook.resolution.width);

// var phone = {
//     brand: prompt("Enter brand"),
//     model: prompt("Enter model"),
//     ram: prompt("Enter ram"),
//     color: prompt("Enter color"),
// };
// alert('brand: ' + phone.brand + '\n' + 'model: ' + phone.model + '\n' + 'ram: ' + phone.ram + '\n' + 'color: ' + phone.color);

// var person = {
//     name: prompt("Enter Name"),
//     surname: prompt("Enter Surname"),
//     married: confirm("Are you married?"),
// }
// alert('name: ' + name + '\n' + 'surname: ' + surname + '\n' + 'married: ' + married);

// alert("task-8");

// var qs = '';

// do{
//     qs = confirm('Yes or No'); 
// }
// while (qs != true) 

// alert("task-9");

// var n = prompt("Введите число:");

// next:
// for (var i = 0; i <= n; i++) { 
//     for (var j = 2; j < i; j++) { 
//         if (i % j == 0) continue next; 
//     }
//   console.log( i ); 
// }

// alert("task-10");

// var i = 0;
// while(true) {
// 	i++;
// 	if(Math.random() > 0.9) {
// 		alert(i);
// 		break;
// 	}
// }

// alert("task-11");

// var str = '';
// var n = prompt("Введите число:");

// for (var i = 0; i < n; i++) {
// 	str += '#';
// }

// alert(str);

// alert("task-12");

// var arr = [4, 51, 20, 24, 121, 2321, 123, 55];
// for (var i = 0; i < arr.length; i++) {
//     arr[i] = Math.pow([i],3)
//     console.log(arr[i]);
// } 