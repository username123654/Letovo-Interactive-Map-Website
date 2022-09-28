var data=[["Иванов Иван", "7", "Moscow"], ["Петрова Анна", "10", "Samara"], ["Гуровиц Владимир", "12", "Moscow"], ["Иностранный Ученик", "10", "United States"]]
var city="Moscow"


function ToTable(data, city){
    const newDiv=document.createElement("div");
    for(let i=0; i<data.length; i++){
        const newLine=document.createElement("div");
        if(data[i][2]!=city){
            continue;
        }
        for(let j=0; j<data[i].length; j++){
            const newEl=document.createElement("div");
            const elText=document.createTextNode(data[i][j]);
            if(j==0){ // 0 - name
                newEl.setAttribute("id", "name");
            }else if(j==1){ // 1 - class
                newEl.setAttribute("id", "grade");
            }else if(j==2){ // 2 - city
                continue;
            }
            newEl.appendChild(elText);
            newLine.appendChild(newEl);
        }
        newLine.setAttribute("id", "line");
        newDiv.appendChild(newLine);
    }
    newDiv.setAttribute("id", "table");
    document.getElementById("table").replaceWith(newDiv);
}


ToTable(data, city)