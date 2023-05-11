let getArr = document.getElementById("getArr"),
    pushArr = document.getElementById("pushArr"),
    unshiftArr = document.getElementById("unshiftArr"),
    shiftArr = document.getElementById("shiftArr"),
    splitString = document.getElementById("splitString"),
    spliceArr = document.getElementById("spliceArr"),
    sortArr = document.getElementById("sortArr"),
    nameToSearch = document.getElementById("nameToSearch"),
    nameToSearch1 = document.getElementById("nameToSearch1"),
    nameToSearch2 = document.getElementById("nameToSearch2"),
    filterArr = document.getElementById("filterArr"),
    mapArr = document.getElementById("mapArr"),
    popArr = document.getElementById("popArr"),
    joinArr = document.getElementById("joinArr"),
    arrToString = document.getElementById("arrToString"),
    arr = [],
    studentToFind = "";

getArr.addEventListener("click", function () {
    console.log(arr);
})

pushArr.addEventListener("click", function () {
    console.log("Array Length:", arr.push("Burt"));
    arr.push("Corin", "Jacob", "Evie", "Jas", "John");
    console.log("New Array With the Names Added:", arr)
})

unshiftArr.addEventListener("click", function () {
    let arrToUnShift = [4, 5, 6];
    console.log("Array New Length:", arrToUnShift.unshift(1, 2, 3))
    console.log("New Array:", arrToUnShift);
})

shiftArr.addEventListener("click", function () {
    let arrToShift = ["first", "second", "third", "forth"];
    let mtArr = [];
    console.log("The Element that got removed:", arrToShift.shift());
    console.log("The Array:", arrToShift);
    console.log("The Element that got removed:", mtArr.shift());
    console.log("The Empty Array:", mtArr);
})

splitString.addEventListener("click", function () {
    let stringToSplit = "I will be seperated by my spaces";
    console.log("Characters", stringToSplit.split(""));
    console.log("Spaces", stringToSplit.split(" "));
    console.log("Sepered by the word by:", stringToSplit.split("by"));
})

spliceArr.addEventListener("click", function () {
    let fruits = ["Apple", "Banana", "Carrot", "Fig", "Grapefruit", "Tomatoes"];
    console.log(fruits.splice(2, 1));
    console.log(fruits);
})

sortArr.addEventListener("click", function () {
    let arrToSort = [651, 64, 4, 655, 2, 46, 8494, 9656, 454, 13]
    console.log("Sorted Acsending Function:",arrToSort.sort(function (a, b) {
        return a - b;
    }))
    console.log("Sorted Acsending Arrow:",arrToSort.sort((a, b) => a - b))
    console.log("Sorted decending Function:",arrToSort.sort(function (a, b) {
        return b - a;
    }))
    console.log("Sorted decending Arrow:",arrToSort.sort((a, b) => b - a))
})

nameToSearch.addEventListener("keypress", function(event){
    if(event.key =="Enter"){
        console.log(event.target.value);
        studentToFind = event.target.value; 
    }
})

filterArr.addEventListener("click", function(){
    let studentArr = ["Burt", "Corin", "Evie", "Jacob", "Jas", "John"];
    let foundStudent = studentArr.filter( x => x == studentToFind)
    let foundStudent2 = studentArr.filter(function(s){
        return s == studentToFind;
    })
    console.log(foundStudent, foundStudent2);
})

mapArr.addEventListener("click", function(){
    let arrToMap = [nameToSearch, nameToSearch1, nameToSearch2];
    // arrToMap.map( x => console.log(x));
    // arrToMap.map( x => x.value = "");
    arrToMap.map(function(x){
        x.value = "";
    })
    console.log(nameToSearch.value = "")
    console.log(nameToSearch1.value = "")
    console.log(nameToSearch2.value = "")
})

popArr.addEventListener("click", function(){
    let arrToPop = ["first", "last"];
    let last = arrToPop.pop();
    console.log('Item Removed', last);
    console.log('The Array', arrToPop);
})
joinArr.addEventListener("click", function(){
    let arrToJoin = ["Hello", ", ", "World","!"];
    console.log(arrToJoin.join(""))
    console.log(arrToJoin.join(" "))
    console.log(arrToJoin.join(" + "))
    console.log(arrToJoin.join("-0-"))
})
arrToString.addEventListener("click", function(){
    let helloWorld = ["Hello", ", ", "World","!"];
    console.log( "Combined with toString",helloWorld.toString())
    
    // let students = "Burt,Corin,Evie,Jacob,Jas,John";
    // let alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    // console.log(students.split(","))
    // console.log(students.split(",").map((x) => x[0] = alpha[alpha.indexOf(x[0])+ 1]))
    // console.log(students.split(",").map((x) => x[0] = alpha[alpha.indexOf(x[0])+ 1]+ x.slice(1)))
    // console.log(students.split(",").map((x) => x[0] = alpha[alpha.indexOf(x[0])+ 1]+ x.slice(1)).join(" "))
})