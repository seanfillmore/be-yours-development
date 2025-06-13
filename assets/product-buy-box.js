document.addEventListener("DOMContentLoaded", function () {
  const qtyButtons = document.querySelectorAll(".qty-btn");
  const form = document.getElementById("buy-box-form");

  qtyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".qty-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      form.dataset.qty = btn.dataset.qty;
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const purchaseType = form.querySelector("input[name='purchase_type']:checked").value;
    const quantity = form.dataset.qty || 1;
    alert(`Adding ${quantity} item(s) as ${purchaseType}`);
    // Replace with real Shopify cart AJAX call
  });
});
