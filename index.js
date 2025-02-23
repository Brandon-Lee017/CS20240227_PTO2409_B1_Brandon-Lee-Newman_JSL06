// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

const prices {
    "Garlic Bread": R45,
    "Grilled Haloumi and Tomato Bruschetta": R54,
    "Margherita Pizza": R180,
    "Spaghetti Carbonara": R87,
    "Tirasmisu": R66,
    "Cheesecake": R47,
};

    // Function to display menu items by category dynamically
function displayMenuItems(menu) {
    const menuContainer = document.getElementById("menu");

    // clear the existing content
    menuContainer.innerHTML = '';

    // Loop through each category and its items in the menu Object
for (const category in menu) {
    
    // Create & add(Append) category element to display items 
    const categoryElement = document.createElement("h3");
    categoryElement.textContent = category;
    menuContainer.appendChild(categoryElement);

    // Create & add(Append) the list of items to display it dynamically
    const itemListElement = document.createElement("ul");
    menu[category].array.forEach(element => {

    const itemListElement = document.createElement("li");
    itemListElement.textContent = `${item}`;
    itemListElement.addEventListener("click", ()=> addToOrder(item));itemListElement.appendChild(itemListElement)
    });
}
menuContainer.appendChild(itemListElement);
}


// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderItemList = document.getElementById("order-item");
    const orderTotal = document.getElementById("order-total");

    // create & append the order-item element
    const orderItem = document.createElement("li")
    orderItem.textContent = `${itemName}`;
    orderItem.appendChild(orderItem);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
        displayMenuItems(menu)
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
