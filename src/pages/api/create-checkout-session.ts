// pages/api/create-checkout-session.js
import { type NextApiRequest, type NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("Stripe Secret Key is not set");
}

const stripe = new Stripe(stripeSecretKey, { apiVersion: '2022-11-15' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body as { priceId: string };

  // Create a Checkout Session.
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${req.headers.origin as string}/scheduling`,
    cancel_url: `${req.headers.origin as string}/courses`,
  });

  res.status(200).json({ sessionId: session.id });
}
