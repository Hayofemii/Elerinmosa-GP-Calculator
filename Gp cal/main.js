
const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const courseUnit = document.querySelector("#course-unit");
const grade = document.querySelector("#grade");
const tbody = document.querySelector("#tbody");
const table = document.querySelector("#table");
const calGp = document.querySelector("#total");
const clear = document.querySelector("#clear");
const tfoot = document.querySelector("#tfoot");
let gpArray=[];

// Appending Of Element
add.addEventListener("click", () => {
    if(courseCode.value===" " || courseUnit.value <="0" || grade.selectedIndex==="0"){
        alert("Wrong Input, Check And Try Again")
    }else {
        const tr= document.createElement("tr");
        const tdCourseCode= document.createElement("td");
        tdCourseCode.innerHTML=courseCode.value;
        const tdCourseUnit= document.createElement("td");
        tdCourseUnit.innerHTML=courseUnit.value;
        const tdGrade= document.createElement("td");
        tdGrade.innerHTML= grade.options[grade.selectedIndex].text;
        tr.appendChild(tdCourseCode);
        tr.appendChild(tdCourseUnit);
        tr.appendChild(tdGrade);
        tbody.appendChild(tr)
        gpArray.push({"courseUnit": courseUnit.value, "grade": grade.options[grade.selectedIndex].value})
        courseUnit.value= " ";
        courseCode.value= " ";
        grade.selectedIndex= "0";

    }

})
calGp.addEventListener("click", () => {
    let courseUnit=0, productOfCourseUnitandGrade=0, sumOfproductOfCourseUnitandGrade=0;
    gpArray.forEach(result =>{
        courseUnit += parseInt(result.courseUnit);
        productOfCourseUnitandGrade=parseInt(result.courseUnit) * parseInt(result.grade);
        sumOfproductOfCourseUnitandGrade += productOfCourseUnitandGrade;

    });
    const tr= document.createElement("tr");
    tdTotalCourseUnit=document.createElement("td");
    tdTotalCourseUnit.innerHTML=`Your Total Course Unit is ${courseUnit}`;
    tdGpa=document.createElement("td");
    tdGpa.innerHTML=`Your Total Gpa is ${(sumOfproductOfCourseUnitandGrade / courseUnit).toFixed(2)}`;

    tr.appendChild(tdTotalCourseUnit);
    tr.appendChild(tdGpa);
    if(tfoot.querySelector("tr") !== null){
        tfoot.querySelector("tr").remove()
    }
    tfoot.appendChild(tr);




})
clear.addEventListener("click", ()=> {

    tbody.querySelectorAll("td"). forEach(child => child.remove())
    if(tfoot.querySelector("tr") !== null){
        tfoot.querySelector("tr").remove()

    }


})

