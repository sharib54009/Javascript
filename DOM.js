// // // // // // // // // let h2 = document.querySelector("h2");
// // // // // // // // // console.dir(h2.innerText);
// // // // // // // // // h2.innerText = h2.innerText + "! by mohammed"
// // // // // // // // let divs = document.querySelectorAll(".box");
// // // // // // // // let idx = 1;
// // // // // // // // for (div of divs) {
// // // // // // // //     div.innerText = `new unique val ${idx}`;
// // // // // // // //     idx++; 
// // // // // // // // }

// // // // // // // // ATTRIBUTES
// // // // // // // let div = document.querySelector("div");
// // // // // // // console.log(div);
// // // // // // // let id = div.getAttribute("id");
// // // // // // // console.log(id);
// // // // // // //  let name = div.getAttribute("name");
// // // // // // // console.log(name);
// // // // // // // let para = document.querySelector("p");
// // // // // // // console.log(para.setAttribute("class", "newclass"));\
// // // // // // let div = document.querySelector("div");
// // // // // // div.style.backgroundColor = "green";
// // // // // // div.style.fontSize = "10px";

// // // // // // CREATING HTML ELE WITH JS
// // // //  let newbutton = document.createElement("button");
// // // // newbutton.innerText = "click me";
// // // // console.log(newbutton);

// // // INSERTING ELEMENTS

// // // // // let div = document.querySelector("div");
// // // // // div.append(newbutton);
// // // // // div.prepend(newbutton);
// // // // // div.before(newbutton);
// // // // // div.after(newbutton)
// // // // let para = document.querySelector("p");
// // // // para.before(newbutton)
// // // let heading = document.createElement("h1");
// // // heading.innerHTML = "<i>heyy..!!!</i>";
// // // document.querySelector("body").prepend(heading);

// // // DELETING
// // let para = document.querySelector("p");
// // para.remove();

// //PQ
// let newbtn = document.createElement("button");
// newbtn.innerText = "click me";
// newbtn.style.color = "white";
// newbtn.style.backgroundColor = "red";
// document.querySelector("body").prepend(newbtn);

// PQ
let p = document.querySelector(".para");