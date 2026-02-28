document.addEventListener("DOMContentLoaded", function () {
    const itemInput = document.querySelector("input[type='text']");
    const qtyInput = document.querySelectorAll("input[type='number']")[0];
    const rateInput = document.querySelectorAll("input[type='number']")[1];
    const invoiceItem = document.getElementById("item");
    const invoiceQty = document.getElementById("Qty");
    const invoiceRate = document.getElementById("Rate");
    const submitBtn = document.querySelector(".print-btn");
    const errorItem = document.querySelector("#errorItem")
    // console.log(submitBtn)
    const amountDisplay = document.querySelector("#Amount")
    // console.log(amountDisplay)
    const invoiceAmount = invoiceItem
        .closest("table")
        .querySelector("tbody td:last-child");

    function updateInvoice() {
        // console.log("function running")
        const item = itemInput.value || "Item";
        const qty = Number(qtyInput.value) || 0;
        const rate = Number(rateInput.value) || 0;
        const amount = qty * rate;

        if (!item) {
            errorItem.textContent = "item is needed"
        }

        invoiceItem.textContent = item;
        invoiceQty.textContent = qty;
        invoiceRate.textContent = rate;
        invoiceAmount.textContent = amount;
    }

    // console.log(Number(qtyInput.value))
    // console.log(rateInput.value)
    itemInput.addEventListener("input", updateInvoice);
    qtyInput.addEventListener("input", updateInvoice);
    rateInput.addEventListener("input", updateInvoice);
    submitBtn.addEventListener("submit", () => {
        amountDisplay.textContent = qtyInput.value * rateInput.value
    })

    updateInvoice();
});