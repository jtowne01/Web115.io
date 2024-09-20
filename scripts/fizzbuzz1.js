document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let firstName = document.getElementById("first-name").value.trim();
    let middleInitial = document.getElementById("middle-initial").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
 
    if (!firstName || !lastName) {
        alert("First Name and Last Name are required!");
        return;
    }
    let greetingMessage = `Welcome to Jumpy Tarantula, ${firstName} ${middleInitial ? middleInitial + "." : ""} ${lastName}!`;
    document.getElementById("greeting").innerText = greetingMessage;

    let countTo = 140; 
    generateList(countTo);
});

function generateList(count) {
    const list = document.getElementById("fizz-buzz-list");
    list.innerHTML = ""; 
  
    for (let i = 1; i <= count; i++) {
        let listItem = document.createElement("li");
        let result = ""; 
  
        if (i % 3 === 0) result += "Jumpy ";
        if (i % 5 === 0) result += "Tarantula";
        if (result === "") result = i;
       
        listItem.innerHTML = `<span class="number">${i}.</span> ${result}`;
        list.appendChild(listItem);
    }
}
