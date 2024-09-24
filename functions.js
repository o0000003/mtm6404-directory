// Functions for managing client list

// Function to generate HTML list of clients
function list(clients) {
    return clients.map(client => `
      <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>$ ${client.balance.toFixed(2)}</strong>
      </li>
    `).join('');
}

// Function to sort clients based on a given property
function order(clients, property) {
    return clients.sort((a, b) => {
        if (typeof a[property] === 'string') {
            return a[property].localeCompare(b[property]);
        } else {
            return a[property] - b[property];
        }
    });
}

// Function to calculate the total balance of all clients
function total(clients) {
    return clients.reduce((accum, client) => accum + client.balance, 0);
}

// Function to retrieve information about a specific client by their index
function info(index) {
    return clients.find(client => client.index === index);
}

// Function to search for clients by name
function search(query) {
    const lowerCaseQuery = query.toLowerCase();
    return clients.filter(client => client.name.toLowerCase().includes(lowerCaseQuery));
}
