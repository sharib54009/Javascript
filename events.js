    let modebtn = document.querySelector("#mode");
    let currmode = "light";
        modebtn.addEventListener("click", () => {
            if (currmode === "light") {
                currmode = "dark";
                document.querySelector("body").style.backgroundColor = "black";
            }
            else if (currmode === "dark"){
                currmode = "red";
                document.querySelector("body").style.backgroundColor = "red";
            }
            else {
                currmode = "red";
                document.querySelector("body").style.backgroundColor = "white";
            }
            console.log(currmode);
        }); 