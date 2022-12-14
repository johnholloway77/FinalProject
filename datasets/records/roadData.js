let xhr = new XMLHttpRequest();
let record;

function loadRoadData(){
    console.log("LoadJSONData funtion loaded");
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("JSON data written to variable record");
            record = JSON.parse(xhr.responseText);
        }
    };

    xhr.open("GET", "https://data.calgary.ca/resource/sizs-hgef.json", true);
    xhr.send();
}

function roadTitleSearch(title){
    console.log(title);
    document.getElementById('descriptionText').innerHTML = "<h3>Search Results by Road Title</h3>";
    let returnMessage = "<tr><th onclick='sortRoadTable(0)'>Title</th><th onclick='sortRoadTable(1)'>Budget</th><th onclick='sortRoadTable(2)'>Description</th><th onclick='sortRoadTable(3)'>Completion</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>"

    let titleValue;
    for (let i = 0; i < record.length; i++){
        let object= record[i];

        if(object.title){

            titleValue = object.title;

            if(titleValue.toLowerCase().includes(title.toLowerCase())){

                let longitude = object.point.coordinates[0];
                let latitude = object.point.coordinates[1];

                returnMessage += "<tr>";
                returnMessage += "<td>" + object.title + "</td>";
                returnMessage += "<td>" + object.budget + "</td>";
                returnMessage += "<td>" + object.description + "</td>";
                returnMessage += "<td>" + object.completion + "</td>";
                returnMessage += "<td>" + latitude + "</td>";
                returnMessage += "<td>" + longitude + "</td>";
                returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + latitude + ' ' + longitude + "' target='_blank'>Click to view</a></td>";
                returnMessage += "</tr>";
            }

        }
    }

    document.getElementById("roadTable").innerHTML = returnMessage; 
};

function roadBudgetSearch(budget){
    console.log(budget);
    document.getElementById('descriptionText').innerHTML = "<h3>Search Results by Road Budget</h3>";
    let returnMessage = "<tr><th onclick='sortRoadTable(0)'>Title</th><th onclick='sortRoadTable(1)'>Budget</th><th onclick='sortRoadTable(2)'>Description</th><th onclick='sortRoadTable(3)'>Completion</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>"

    let budgetValue;
    for (let i = 0; i < record.length; i++){
        let object= record[i];

        if(object.budget){

            budgetValue = object.budget;

            if(budgetValue.toLowerCase().includes(budget.toLowerCase())){

                let longitude = object.point.coordinates[0];
                let latitude = object.point.coordinates[1];

                returnMessage += "<tr>";
                returnMessage += "<td>" + object.title + "</td>";
                returnMessage += "<td>" + object.budget + "</td>";
                returnMessage += "<td>" + object.description + "</td>";
                returnMessage += "<td>" + object.completion + "</td>";
                returnMessage += "<td>" + latitude + "</td>";
                returnMessage += "<td>" + longitude + "</td>";
                returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + latitude + ' ' + longitude + "' target='_blank'>Click to view</a></td>";
                returnMessage += "</tr>";
            }

        }
    }

    document.getElementById("roadTable").innerHTML = returnMessage; 
};

function roadDescriptionSearch(desc){
    console.log(desc);
    document.getElementById('descriptionText').innerHTML = "<h3>Search Results by Road Description</h3>";
    let returnMessage = "<tr><th onclick='sortRoadTable(0)'>Title</th><th onclick='sortRoadTable(1)'>Budget</th><th onclick='sortRoadTable(2)'>Description</th><th onclick='sortRoadTable(3)'>Completion</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>"

    let descValue;
    for (let i = 0; i < record.length; i++){
        let object= record[i];

        if(object.description){

            descValue = object.description;

            if(descValue.toLowerCase().includes(desc.toLowerCase())){

                let longitude = object.point.coordinates[0];
                let latitude = object.point.coordinates[1];

                returnMessage += "<tr>";
                returnMessage += "<td>" + object.title + "</td>";
                returnMessage += "<td>" + object.budget + "</td>";
                returnMessage += "<td>" + object.description + "</td>";
                returnMessage += "<td>" + object.completion + "</td>";
                returnMessage += "<td>" + latitude + "</td>";
                returnMessage += "<td>" + longitude + "</td>";
                returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + latitude + ' ' + longitude + "' target='_blank'>Click to view</a></td>";
                returnMessage += "</tr>";
            }

        }
    }

    document.getElementById("roadTable").innerHTML = returnMessage; 
};

function roadCompletionSearch(completion){
    console.log(title);
    document.getElementById('descriptionText').innerHTML = "<h3>Search Results by Road Completion</h3>";
    let returnMessage = "<tr><th onclick='sortRoadTable(0)'>Title</th><th onclick='sortRoadTable(1)'>Budget</th><th onclick='sortRoadTable(2)'>Description</th><th onclick='sortRoadTable(3)'>Completion</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>";

    
    let completionValue;
    for (let i = 0; i < record.length; i++){
        let object= record[i];

        if(object.completion){

            completionValue = object.completion;

            if(completionValue.toLowerCase().includes(completion.toLowerCase())){

                let longitude = object.point.coordinates[0];
                let latitude = object.point.coordinates[1];

                returnMessage += "<tr>";
                returnMessage += "<td>" + object.title + "</td>";
                returnMessage += "<td>" + object.budget + "</td>";
                returnMessage += "<td>" + object.description + "</td>";
                returnMessage += "<td>" + object.completion + "</td>";
                returnMessage += "<td>" + latitude + "</td>";
                returnMessage += "<td>" + longitude + "</td>";
                returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + latitude + ' ' + longitude + "' target='_blank'>Click to view</a></td>";
                returnMessage += "</tr>";
            }

        }
    }

    document.getElementById("roadTable").innerHTML = returnMessage; 
};

function sortRoadTable(n){
 
    //declare and initalize variables
     let table = document.getElementById("roadTable");
     let switchcount = 0;
     let switching = true;
     let dir = "asc";
     let rows;
     let i, x, y;
     let shouldSwitch;
     
     let tableLengthCheck= table.rows;

     if(201 > tableLengthCheck.length){

     while(switching) {
        switching = false;
        rows = table.rows;
    
        for (i = 1; i < (rows.length -1); i++){
            shouldSwitch = false;
    
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
    
            if(dir == "asc"){
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc"){
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
    
        if(shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
    
            switchcount++;
        } else{
            if (switchcount == 0 && dir == "asc"){
                dir = "desc";
                switching = true;
            }
        }
    
     }

    } else{
        alert("Table sorting is limited to 200 or fewer search results.")
    }
    
    };