// pages/api/lead.ts
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, company, salesReps, crm } = req.body;

  // TODO: Send to CRM, store in DB, forward to email, etc.

  return res.status(200).json({ message: 'Success' });
}
