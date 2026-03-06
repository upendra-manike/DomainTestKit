const http = require('http');
const { URL } = require('url');

const port = Number(process.env.PORT || 3000);

const html = (title, body) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 2rem; background: #f8fafc; color: #0f172a; }
    .card { background: #fff; border: 1px solid #cbd5e1; border-radius: 10px; padding: 1rem; max-width: 720px; }
    h1 { margin-top: 0; }
    label, input, button { display: block; margin: 0.4rem 0; }
    input { padding: 0.45rem; width: 100%; max-width: 360px; }
    button { padding: 0.45rem 0.75rem; cursor: pointer; }
    [data-testid$="status"], [data-testid="wallet-balance"] { margin-top: 0.6rem; font-weight: 600; }
  </style>
</head>
<body>
  <main>
    <div class="card">
      ${body}
    </div>
  </main>
</body>
</html>`;

const loginPage = html(
  'Login',
  `
  <h1>DomainTestKit Mock App</h1>
  <label for="email">Email</label>
  <input id="email" data-testid="email" type="email" value="fintech.user@example.test" />
  <label for="password">Password</label>
  <input id="password" data-testid="password" type="password" value="replace-me" />
  <button data-testid="login-submit">Login</button>

  <hr />
  <button data-testid="nav-payments">Open Payments</button>
  <label for="payment-amount">Amount</label>
  <input id="payment-amount" data-testid="payment-amount" value="100" />
  <label for="payment-currency">Currency</label>
  <input id="payment-currency" data-testid="payment-currency" value="USD" />
  <button data-testid="payment-submit">Make Payment</button>
  <div data-testid="payment-status">PENDING</div>

  <script>
    document.querySelector('[data-testid="login-submit"]').addEventListener('click', () => {
      document.body.setAttribute('data-login', 'ok');
    });
    document.querySelector('[data-testid="payment-submit"]').addEventListener('click', () => {
      document.querySelector('[data-testid="payment-status"]').textContent = 'SUCCESS';
    });
    document.querySelector('[data-testid="nav-payments"]').addEventListener('click', () => {
      window.location.hash = '#payments';
    });
  </script>
  `
);

const appointmentPage = html(
  'Appointments',
  `
  <h1>Book Appointment</h1>
  <label>Patient ID</label>
  <input data-testid="appointment-patient-id" value="P-1001" />
  <label>Slot</label>
  <input data-testid="appointment-slot" value="2026-03-10T10:00:00Z" />
  <button data-testid="appointment-book">Book</button>
  <div data-testid="appointment-status">PENDING</div>

  <script>
    document.querySelector('[data-testid="appointment-book"]').addEventListener('click', () => {
      document.querySelector('[data-testid="appointment-status"]').textContent = 'CONFIRMED';
    });
  </script>
  `
);

const checkoutPage = html(
  'Checkout',
  `
  <h1>Checkout</h1>
  <button data-testid="place-order">Place Order</button>
  <div data-testid="order-status">PENDING</div>
  <script>
    document.querySelector('[data-testid="place-order"]').addEventListener('click', () => {
      document.querySelector('[data-testid="order-status"]').textContent = 'ORDER_CONFIRMED';
    });
  </script>
  `
);

const productPage = html(
  'Product',
  `
  <h1>Product Detail</h1>
  <button data-testid="add-to-cart">Add to Cart</button>
  <script>
    document.querySelector('[data-testid="add-to-cart"]').addEventListener('click', () => {
      window.localStorage.setItem('cart', '1');
    });
  </script>
  `
);

const kycPage = html(
  'KYC',
  `
  <h1>KYC</h1>
  <input data-testid="kyc-id-number" value="ID-1001" />
  <input data-testid="kyc-document-upload" type="file" />
  <button data-testid="kyc-submit">Submit KYC</button>
  <div data-testid="kyc-status">PENDING</div>
  <script>
    document.querySelector('[data-testid="kyc-submit"]').addEventListener('click', () => {
      document.querySelector('[data-testid="kyc-status"]').textContent = 'UNDER_REVIEW';
    });
  </script>
  `
);

const walletPage = html(
  'Wallet',
  `
  <h1>Wallet</h1>
  <input data-testid="wallet-topup-amount" value="100" />
  <button data-testid="wallet-topup-submit">Top Up</button>
  <div data-testid="wallet-balance">0</div>
  <script>
    document.querySelector('[data-testid="wallet-topup-submit"]').addEventListener('click', () => {
      const amount = document.querySelector('[data-testid="wallet-topup-amount"]').value || '0';
      document.querySelector('[data-testid="wallet-balance"]').textContent = amount;
    });
  </script>
  `
);

const patientPage = html(
  'Patient',
  `
  <h1>Register Patient</h1>
  <input data-testid="patient-name" value="Alex" />
  <input data-testid="patient-dob" value="1990-01-01" />
  <button data-testid="patient-save">Save</button>
  <div data-testid="patient-status">PENDING</div>
  <script>
    document.querySelector('[data-testid="patient-save"]').addEventListener('click', () => {
      document.querySelector('[data-testid="patient-status"]').textContent = 'REGISTERED';
    });
  </script>
  `
);

const productSearchPage = html(
  'Products',
  `
  <h1>Products</h1>
  <input data-testid="product-search" value="Wireless Headphones" />
  <button data-testid="product-search-submit">Search</button>
  <div data-testid="product-result-name">Wireless Headphones</div>
  `
);

const json = (res, code, obj) => {
  res.statusCode = code;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(obj));
};

const server = http.createServer((req, res) => {
  const u = new URL(req.url || '/', `http://127.0.0.1:${port}`);

  if (u.pathname === '/api/payments' && req.method === 'POST') {
    return json(res, 201, { status: 'created', id: 'PAY-1001' });
  }

  if (u.pathname.startsWith('/api/users/') && req.method === 'GET') {
    return json(res, 200, { id: u.pathname.split('/').pop(), status: 'active' });
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (u.pathname === '/' || u.pathname === '/login') return res.end(loginPage);
  if (u.pathname === '/appointments/new') return res.end(appointmentPage);
  if (u.pathname === '/checkout') return res.end(checkoutPage);
  if (u.pathname.startsWith('/products/')) return res.end(productPage);
  if (u.pathname === '/products') return res.end(productSearchPage);
  if (u.pathname === '/kyc') return res.end(kycPage);
  if (u.pathname === '/wallet') return res.end(walletPage);
  if (u.pathname === '/patients/new') return res.end(patientPage);

  res.statusCode = 404;
  res.end(html('Not Found', '<h1>Not Found</h1>'));
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Mock server listening on http://127.0.0.1:${port}`);
});
