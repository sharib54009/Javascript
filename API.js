let URL = "https://cat-fact.herokuapp.com/facts";
const getFact = document.querySelector("#btn");
const FactPara = document.querySelector("#FactPara");




const getFacts = async () => {
    console.log("getting data/....");
    let response = await fetch(URL );
    console.log(response);
    let data = await response.json();
    FactPara.innerText = data[2].text;
    
    
};

btn.addEventListener("click", getFacts)