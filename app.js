// /* 
// input deposit
// deposit Balance
// Balance
//  */

// function deposit(id1, id2, id3) {
//   const inputDeposit = document.getElementById(id1).value;
//   const balanceDeposit = document.getElementById(id2).innerText;
//   const balance = document.getElementById(id3).innerText;

//   const deposit = parseFloat(inputDeposit) + parseFloat(balanceDeposit);
//   const bl = parseFloat(inputDeposit) + parseFloat(balance);
//   document.getElementById(id2).innerText = deposit;
//   document.getElementById(id3).innerText = bl;
//   document.getElementById(id1).value = "";
// }
// document
//   .getElementById("btn-deposit")
//   .addEventListener("click", function (event) {
//     deposit("deposit-input", "deposit", "balance");
//   });

// /* 
// input withdraw
// withdraw Balance
// Balance
//  */

// function withdraw(id1, id2, id3) {
//   const inputDeposit = document.getElementById(id1).value;
//   const balanceDeposit = document.getElementById(id2).innerText;
//   const balance = document.getElementById(id3).innerText;
//   if (parseFloat(inputDeposit) < parseFloat(balance)) {
//     const deposit = parseFloat(inputDeposit) + parseFloat(balanceDeposit);
//     const bl = parseFloat(balance) - parseFloat(inputDeposit);
//     document.getElementById(id2).innerText = deposit;
//     document.getElementById(id3).innerText = bl;
//     document.getElementById(id1).value = "";
//   }
//   document.getElementById(id1).value = "";
// }
// document
//   .getElementById("btn-withdraw")
//   .addEventListener("click", function (event) {
//     withdraw("withdraw-input", "withdraw", "balance");
//   });
/* 
Function to handle deposit transactions.
Parameters:
- id1: The ID of the input field for deposit amount.
- id2: The ID of the element displaying the total deposited amount.
- id3: The ID of the element displaying the total balance.
*/

 /* 
Generic function to handle deposit and withdrawal transactions.
Parameters:
- inputId: The ID of the input field for the amount.
- balanceId: The ID of the element displaying the balance of deposit or withdrawal.
- totalBalanceId: The ID of the element displaying the total balance.
- isDeposit: Boolean to indicate if the transaction is a deposit (true) or withdrawal (false).
*/

function updateBalance(inputId, balanceId, totalBalanceId, isDeposit) {
  const amount = parseFloat(document.getElementById(inputId).value);
  const currentBalance = parseFloat(document.getElementById(balanceId).innerText);
  const totalBalance = parseFloat(document.getElementById(totalBalanceId).innerText);

  if (isDeposit || amount <= totalBalance) {
    document.getElementById(balanceId).innerText = currentBalance + amount;
    document.getElementById(totalBalanceId).innerText = isDeposit 
      ? totalBalance + amount 
      : totalBalance - amount;
  }

  document.getElementById(inputId).value = "";
}

// Attach the functions to the respective buttons
document.getElementById("btn-deposit").addEventListener("click", function () {
  updateBalance("deposit-input", "deposit", "balance", true);
});

document.getElementById("btn-withdraw").addEventListener("click", function () {
  updateBalance("withdraw-input", "withdraw", "balance", false);
});


// Function to fetch data and create dynamic cards
 // Function to fetch Pokémon data and create dynamic cards
async function fetchAndCreatePokemonCards() {
  try {
    // Fetch details of the first 10 Pokémon from the PokéAPI
    for (let i = 1; i <= 10; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const pokemon = await response.json();

      // Create a new card for each Pokémon
      const card = document.createElement('div');
      card.className = "bg-blue-500 rounded-3xl p-8 m-4 text-white";

      card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="mx-auto mb-4" />
        <h4 class="text-2xl font-bold capitalize">${pokemon.name}</h4>
        <p>Height: ${pokemon.height / 10} m</p>
        <p>Weight: ${pokemon.weight / 10} kg</p>
        <p>Type: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
      `;

      document.getElementById('pokemon-cards').appendChild(card);
    }
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }
}

// Call the function to fetch Pokémon data and create cards on page load
fetchAndCreatePokemonCards();