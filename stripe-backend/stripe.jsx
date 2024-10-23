const express = require('express');
const app = express();
const cors = require('cors');
const stripe = require('stripe')('sk_test_51QCdJgHs61E5vpBs4zY8M8HWoj5VE3MX7SYebMwAUKDOlV3hjcWk0qBfQRamPIjwID50MZ0IVjuXXlNzV765pUZG00DblpUBpw');

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;

  const line_items = items.map(item => ({
    price_data: {
      currency: 'eur',
      product_data: {
        name: item.name,
      },
      unit_amount: Math.round(item.price * 100), // Le prix en centimes
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: 'https://your-site.com/success',
    cancel_url: 'http://localhost:5173/shoppingBag',
  });

  res.json({ id: session.id });
});

app.listen(3002, () => console.log('Server running on port 3002'));
