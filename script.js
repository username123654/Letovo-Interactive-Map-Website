var data = [
    {
        "name": "Wing Graham",
        "region": "Leningrad Oblast",
        "grade": "10"
    },
    {
        "name": "Abraham Stone",
        "region": "Orenburg Oblast",
        "grade": "9"
    },
    {
        "name": "Lee Stokes",
        "region": "Tambov Oblast",
        "grade": "9"
    },
    {
        "name": "Sierra Manning",
        "region": "Omsk Oblast",
        "grade": "11"
    },
    {
        "name": "Patricia Lucas",
        "region": "Arkhangelsk Oblast",
        "grade": "7"
    },
    {
        "name": "Abel Caldwell",
        "region": "Moscow City",
        "grade": "8"
    },
    {
        "name": "Wendy Huff",
        "region": "Leningrad Oblast",
        "grade": "9"
    },
    {
        "name": "Jakeem Bell",
        "region": "Oryol Oblast",
        "grade": "10"
    },
    {
        "name": "Rashad Gay",
        "region": "Magadan Oblast",
        "grade": "8"
    },
    {
        "name": "Merritt Kemp",
        "region": "Magadan Oblast",
        "grade": "7"
    },
    {
        "name": "Jemima Olsen",
        "region": "Kostroma Oblast",
        "grade": "10"
    },
    {
        "name": "Salvador Roy",
        "region": "Kurgan Oblast",
        "grade": "8"
    },
    {
        "name": "Dieter Herman",
        "region": "Kaluga Oblast",
        "grade": "9"
    },
    {
        "name": "Joy Morales",
        "region": "Samara Oblast",
        "grade": "8"
    },
    {
        "name": "Katelyn Weber",
        "region": "Kaluga Oblast",
        "grade": "9"
    },
    {
        "name": "Cassandra Graham",
        "region": "Tomsk Oblast",
        "grade": "9"
    },
    {
        "name": "Elton Ratliff",
        "region": "Kaluga Oblast",
        "grade": "8"
    },
    {
        "name": "Kameko Ford",
        "region": "Kemerovo Oblast",
        "grade": "10"
    },
    {
        "name": "Quin Calhoun",
        "region": "Vologda Oblast",
        "grade": "11"
    },
    {
        "name": "Hedwig Salazar",
        "region": "Samara Oblast",
        "grade": "10"
    }
];


var region="Kaluga Oblast"


function ToTable(data, region){
    const newDiv=document.createElement("div");
    var il;
    for(let i = 0; i < data.length; i++){
        if(data[i].region == region){
            il = i;
        }
    }
    for(let i = 0; i < data.length; i++){
        if(data[i].region == region){
            const newLine = document.createElement("div");
            const newEl = document.createElement("div");
            const textName = document.createElement("div");
            const textGrade = document.createElement("div");
            textGrade.setAttribute("id", "grade");
            if(i != il){
                textGrade.setAttribute("style", "margin-bottom:50px");
            }
            textName.textContent = data[i].name;
            textGrade.textContent = data[i].grade;
            newEl.appendChild(textName);
            newEl.appendChild(textGrade);
            newLine.appendChild(newEl);
            newLine.setAttribute("id", "line");
            newDiv.appendChild(newLine);
        }
    }
    newDiv.setAttribute("id", "table");
    document.getElementById("table").replaceWith(newDiv);
}

ToTable(data, region);