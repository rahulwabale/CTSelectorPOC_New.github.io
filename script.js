document.getElementById('submitBtn').addEventListener('click', function () {
  const ticketNumber = crypto.randomUUID();
  document.getElementById('ticket-number').textContent = ticketNumber;
});

document.getElementById('refreshBtn').addEventListener('click', function () {
  location.reload();
});