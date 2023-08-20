// pages/api/create-checkout-session.js
import { type NextApiRequest, type NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("Stripe Secret Key is not set");
}

const stripe = new Stripe(stripeSecretKey, { apiVersion: '2022-11-15' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { selectedPriceId } = req.body as { selectedPriceId?: string };

  if (!selectedPriceId || typeof selectedPriceId !== 'string' || selectedPriceId.trim() === '') {
    return res.status(400).json({ error: 'No valid priceId provided' });
  }

  // Create a Checkout Session.
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: selectedPriceId,
        quantity: 1,
      },
    ],
    success_url: `https://calendly.com/sourceparenthealth`,
    cancel_url: `${req.headers.origin as string}/courses`,
  });

  res.status(200).json({ sessionId: session.id });
}
