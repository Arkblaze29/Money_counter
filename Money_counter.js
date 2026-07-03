const readlineSync = require("readline-sync");
function calculate_total(note, number) {
  return note * number;
}
let grand_total = 0;
let transaction_count = 0;
let transaction_history = [];
console.log("Welcome to Shang Wei's Money Counter");
console.log("====================================");
while (true) {
  let note = readlineSync.question("Enter the type of note: ");
  note = parseInt(note);
  if (!Number.isNaN(note) && note > 0) {
  } else {
    console.log("Invalid note value. Please enter a positive integer.");
    continue;
  }
  let number = readlineSync.question("Enter the number of notes: ");
  number = parseInt(number);
  if (!Number.isNaN(number) && number > 0) {
  } else {
    console.log("Invalid number value. Please enter a positive integer.");
    continue;
  }
  let total = calculate_total(note, number);
  grand_total += total;
  transaction_count++;
  transaction_history.push({ note: note, number: number, total: total });
  console.log(`Transaction total: $${total}`);
  console.log(`Current total: $${grand_total}`);
  let choice = readlineSync
    .question("Do you want to continue? (y/n) ")
    .toLowerCase();
  if (choice !== "y" && choice !== "n") {
    console.log("Invalid choice. Please enter 'y' or 'n'.");
    continue;
  } else if (choice !== "y") {
    break;
  }
}
console.log("===== SUMMARY =====");
console.log(`Total Transactions: ${transaction_count}`);
console.log(`Grand Total: $${grand_total}`);
console.log("Transaction Details:");
let i = 0;
while (i < transaction_history.length) {
  let t = transaction_history[i];
  console.log(`  ${i + 1}. ${t.number} x $${t.note} notes = $${t.total}`);
  i++;
console.log("Thank you for using Shang Wei's Money Counter!");
}
