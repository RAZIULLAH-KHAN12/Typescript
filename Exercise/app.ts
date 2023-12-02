var prVal: number = 0;
var amount: number;
//set by default date
var date: any = ((
  document.getElementById("date")! as HTMLInputElement
).valueAsDate = new Date());
var curRow: HTMLTableRowElement | null = null;

function updateTotalAmounts() {
    prVal = 0;
    const table = document.getElementById("dt")! as HTMLTableElement;
    for (let i = 1; i < table.rows.length; i++) {
      const row = table.rows[i];
      const cell = row.cells[2].textContent;
      const amount = cell !== null ? parseFloat(cell) || 0 : 0;
      prVal += amount;
      row.cells[4].textContent = prVal.toString();
    }
    (document.getElementById('gh')! as HTMLTableCellElement).textContent = 'Total';
}

function exe(event: Event) {
  event.preventDefault();

  //inputValue
  let name = (document.getElementById("name")! as HTMLInputElement).value;
  amount = +(document.getElementById("amount")! as HTMLInputElement).value;
  date = (document.getElementById("date")! as HTMLInputElement).value;

  if (curRow) {
    curRow.cells[1].textContent = name;
    curRow.cells[2].textContent = amount.toString();
    curRow.cells[3].textContent = date;

    prVal += amount;
    curRow.cells[4].textContent = prVal.toString();
    updateTotalAmounts();
    curRow = null;
  } else {
    // Add a new row to the table
    const table = document.getElementById("dt")! as HTMLTableElement;
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0); //id
    const cell2: any = row.insertCell(1); //name
    const cell3: any = row.insertCell(2); //amount
    const cell4: any = row.insertCell(3); //date
    const cell5 = row.insertCell(4); //total
    const cell6 = row.insertCell(5); //Edit button

    cell1.textContent = (table.rows.length - 2).toString();

    cell2.textContent = name;
    cell3.textContent = amount;
    cell4.textContent = date;
    // if(amount < 0) {
    //     prVal -= Math.abs(amount);
    // }
    // else{
    prVal += amount;
    // }
    cell5.textContent = prVal.toString();

    const button = document.createElement("button");
    button.textContent = "Edit";

    button.addEventListener("click", () => {
      // store values in a variable because we want to retrive the value.
      curRow = row;
      const newName = cell2.textContent;
      const newAmount = cell3.textContent;
      const newDate = cell4.textContent;

      //now retrive the value
      (document.getElementById("name")! as HTMLInputElement).value = newName;
      (document.getElementById("amount")! as HTMLInputElement).value =
        newAmount;
      (document.getElementById("date")! as HTMLInputElement).value = newDate;
    });
    cell6.appendChild(button);
    updateTotalAmounts();
  }
  //clear
  (document.getElementById("myForm") as HTMLFormElement).reset();
  date = (document.getElementById("date")! as HTMLInputElement).valueAsDate =
    new Date();
    // updateTotal();
}

document.getElementById("myForm")!.addEventListener("submit", exe);
