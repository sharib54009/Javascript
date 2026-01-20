// FOR-IN LOOP (used for objects)
 let student = {
     name: "Mohammed Sharib",
     age: 18,
    cgpa: 8.08,
     ispass: true
 };
 for (let key in student ) {
     console.log("key :", key,    "values: ", student[key]);
 }
