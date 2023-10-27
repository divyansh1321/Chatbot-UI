function sendMessage() {
    const chatHistory = document.getElementById("chatHistory");
    const searchHistory = document.getElementById("searchHistory");
    const userInput = document.getElementById("userInput");

    if (userInput.value.trim() !== "") {
      
        const userMessage = document.createElement("div");
        userMessage.className = "chat-message user";
        userMessage.innerText = userInput.value;
        chatHistory.appendChild(userMessage);

        
        const searchItem = document.createElement("li");
        searchItem.innerText = userInput.value;
        searchHistory.appendChild(searchItem);

        userInput.value = "";
        
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "0px" || sidebar.style.width === "") {
        sidebar.style.width = "250px";
    } else {
        sidebar.style.width = "0px";
    }
}
function checkForEnter(event) {
   
    if (event.keyCode === 13) {
        sendMessage();

        
        event.preventDefault();
    }
}

function toggleMode() {
    const body = document.body;
    const modeVal = document.getElementById("ham");
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");

        if (modeVal.classList.contains("hamb")) {
            modeVal.classList.remove("hamb");
          }
        
    } else {
        body.classList.add("dark-mode");
        modeVal.classList.add("hamb");
    }
}
