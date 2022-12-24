let drpdwn = document.getElementById("drpdwn");
let reslt = document.getElementById("res");
let fltrbtn = document.getElementById("fltrbtn");


let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" }
]

function filterbyprofession() {
    reslt.innerHTML = "";
    let drpdwnValue = drpdwn.value;

    if (drpdwnValue == "profession") {
        alert("Select a profession before clicking the button.");
        return;
    }

    arr.forEach((item) => {
        if (item.profession === drpdwnValue) {
            let divElmnt = document.createElement("div");

            //adding border to the values
            divElmnt.style.borderStyle = "solid";
            divElmnt.style.margin ="20px 10px";
            divElmnt.style.borderRadius ="5px";

            
            
            divElmnt.innerText = item.id + ". Name: " + item.name + " Profession: " + item.profession + " Age: " + item.age;
            reslt.append(divElmnt);
        }
    })

    console.log(arr);
}

fltrbtn.addEventListener("click", filterbyprofession);

let nameAdd = document.getElementById("name");
let professionAdd = document.getElementById("profession");
let ageAdd = document.getElementById("age");
let btnAdd = document.getElementById("useradd");


function addUser() {
    let kname = nameAdd.value;
    let age = ageAdd.value;
    let prof = professionAdd.value;
    let x = arr.length;
    ++x;

    let crr = { id: x, name: `${kname}`, age: `${age}`, profession: `${prof}` }
        if(kname !== "" && age !== "" && prof !== ""){
             arr.push(crr);
            }
            else{
                alert("fill complete detail.")
            }

    console.log(arr);

    nameAdd.value = "";
    ageAdd.value = "";
    professionAdd.value = "";

}

btnAdd.addEventListener("click", addUser);
