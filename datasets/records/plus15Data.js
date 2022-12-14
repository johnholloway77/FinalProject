xhr = new XMLHttpRequest();
record;

function loadPlus15Data(){
    console.log("LoadJSONData funtion loaded");
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("JSON data written to variable record");
            record = JSON.parse(xhr.responseText);
        }
    };

    xhr.open("GET", "https://data.calgary.ca/resource/fu7z-c7ar.json", true);
    xhr.send();
}


function searchBridgeName(name){
    console.log(name);
    document.getElementById('descriptionText').innerHTML = "<h3>Search Results by Bridge Name</h3>";
    let returnMessage = "<tr><th onclick='sortplus15Table(0)'>Bridge Name</th><th onclick='sortplus15Table(1)'>Location</th><th onclick='sortplus15Table(2)'>Connection Type</th><th onclick='sortplus15Table(3)'>Street Location</th><th onclick='sortplus15Table(4)'>Status</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>"

    let nameValue;
    for(let i = 0; i < record.length; i++){
        let object = record[i];

        
            nameValue = object.bridge_name;
            if(name !== "" && nameValue.toLowerCase().includes(name.toLowerCase())){
                let longitude = object.polygon.coordinates[0][0][0];
                console.log('longitude', longitude);
                let latitude =object.polygon.coordinates[0][0][1];
                console.log('lat', latitude);

                returnMessage += "<tr>";
                returnMessage += "<td>" + object.bridge_name + "</td>";
                returnMessage += "<td>" + object.location + "</td>";
                returnMessage += "<td>" + object.conn_type + "</td>";
                returnMessage += "<td>" + object.cross_loc + "</td>";
                returnMessage += "<td>" + object.status + "</td>";
                returnMessage += "<td>" + latitude + "</td>";
                returnMessage += "<td>" + longitude + "</td>";
                returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + latitude + ' ' + longitude + "' target='_blank'>Click to view</a></td>";
                returnMessage += "</tr>";
            }
        
    }
    document.getElementById("plus15Table").innerHTML = returnMessage; 
};


function searchLocation(location){
    document.getElementById('descriptionText').innerHTML = "<h3>Search Results by Bridge Location</h3>";
    let returnMessage = "<tr><th onclick='sortplus15Table(0)'>Bridge Name</th><th onclick='sortplus15Table(1)'>Location</th><th onclick='sortplus15Table(2)'>Connection Type</th><th onclick='sortplus15Table(3)'>Street Location</th><th onclick='sortplus15Table(4)'>Status</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>"

    let locationValue;
    for(let i = 0; i < record.length; i++){
        let object = record[i];

        
            locationValue = object.location;
            if(location !== "" && locationValue.toLowerCase().includes(location.toLowerCase())){
                let longitude = object.polygon.coordinates[0][0][0];
                console.log('longitude', longitude);
                let latitude =object.polygon.coordinates[0][0][1];
                console.log('lat', latitude);

                returnMessage += "<tr>";
                returnMessage += "<td>" + object.bridge_name + "</td>";
                returnMessage += "<td>" + object.location + "</td>";
                returnMessage += "<td>" + object.conn_type + "</td>";
                returnMessage += "<td>" + object.cross_loc + "</td>";
                returnMessage += "<td>" + object.status + "</td>";
                returnMessage += "<td>" + latitude + "</td>";
                returnMessage += "<td>" + longitude + "</td>";
                returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + latitude + ' ' + longitude + "' target='_blank'>Click to view</a></td>";
                returnMessage += "</tr>";
            }
        
    }
    document.getElementById("plus15Table").innerHTML = returnMessage; 
};


function searchConnectionType(connection){
    document.getElementById('descriptionText').innerHTML = "<h3>Search Results by Connection Type</h3>";
    let returnMessage = "<tr><th onclick='sortplus15Table(0)'>Bridge Name</th><th onclick='sortplus15Table(1)'>Location</th><th onclick='sortplus15Table(2)'>Connection Type</th><th onclick='sortplus15Table(3)'>Street Location</th><th onclick='sortplus15Table(4)'>Status</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>"

    let connectionValue;
    for(let i = 0; i < record.length; i++){
        let object = record[i];

        
            connectionValue = object.conn_type;
            if(connection !== "" && connectionValue.toLowerCase().includes(connection.toLowerCase())){
                let longitude = object.polygon.coordinates[0][0][0];
                let latitude =object.polygon.coordinates[0][0][1];

                returnMessage += "<tr>";
                returnMessage += "<td>" + object.bridge_name + "</td>";
                returnMessage += "<td>" + object.location + "</td>";
                returnMessage += "<td>" + object.conn_type + "</td>";
                returnMessage += "<td>" + object.cross_loc + "</td>";
                returnMessage += "<td>" + object.status + "</td>";
                returnMessage += "<td>" + latitude + "</td>";
                returnMessage += "<td>" + longitude + "</td>";
                returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + latitude + ' ' + longitude + "' target='_blank'>Click to view</a></td>";
                returnMessage += "</tr>";
            }
        
    }
    document.getElementById("plus15Table").innerHTML = returnMessage; 
};

function searchStreet(street){
    document.getElementById('descriptionText').innerHTML = "<h3>Search Results by Street</h3>";
    let returnMessage = "<tr><th onclick='sortplus15Table(0)'>Bridge Name</th><th onclick='sortplus15Table(1)'>Location</th><th onclick='sortplus15Table(2)'>Connection Type</th><th onclick='sortplus15Table(3)'>Street Location</th><th onclick='sortplus15Table(4)'>Status</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>"

    let streetValue;
    for(let i = 0; i < record.length; i++){
        let object = record[i];

        streetValue = object.cross_loc;
            if(street !== "" && street !== " " &&streetValue.toLowerCase().includes(street.toLowerCase())){
                let longitude = object.polygon.coordinates[0][0][0];
                let latitude =object.polygon.coordinates[0][0][1];

                returnMessage += "<tr>";
                returnMessage += "<td>" + object.bridge_name + "</td>";
                returnMessage += "<td>" + object.location + "</td>";
                returnMessage += "<td>" + object.conn_type + "</td>";
                returnMessage += "<td>" + object.cross_loc + "</td>";
                returnMessage += "<td>" + object.status + "</td>";
                returnMessage += "<td>" + latitude + "</td>";
                returnMessage += "<td>" + longitude + "</td>";
                returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + latitude + ' ' + longitude + "' target='_blank'>Click to view</a></td>";
                returnMessage += "</tr>";
            }
        
    }
    document.getElementById("plus15Table").innerHTML = returnMessage; 
};

function searchStatus(status){
    document.getElementById('descriptionText').innerHTML = "<h3>Search Results by Bridge Status</h3>";
    let returnMessage = "<tr><th onclick='sortplus15Table(0)'>Bridge Name</th><th onclick='sortplus15Table(1)'>Location</th><th onclick='sortplus15Table(2)'>Connection Type</th><th onclick='sortplus15Table(3)'>Street Location</th><th onclick='sortplus15Table(4)'>Status</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>"

    let statusValue;
    for(let i = 0; i < record.length; i++){
        let object = record[i];

        
        statusValue = object.status;
            if(status !== "" && statusValue.toLowerCase().includes(status.toLowerCase())){
                let longitude = object.polygon.coordinates[0][0][0];
                let latitude =object.polygon.coordinates[0][0][1];

                returnMessage += "<tr>";
                returnMessage += "<td>" + object.bridge_name + "</td>";
                returnMessage += "<td>" + object.location + "</td>";
                returnMessage += "<td>" + object.conn_type + "</td>";
                returnMessage += "<td>" + object.cross_loc + "</td>";
                returnMessage += "<td>" + object.status + "</td>";
                returnMessage += "<td>" + latitude + "</td>";
                returnMessage += "<td>" + longitude + "</td>";
                returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + latitude + ' ' + longitude + "' target='_blank'>Click to view</a></td>";
                returnMessage += "</tr>";
            }
        
    }
    document.getElementById("plus15Table").innerHTML = returnMessage; 

}

function sortplus15Table(n){
 
    //declare and initalize variables
     let table = document.getElementById("plus15Table");
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