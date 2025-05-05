export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, dotNumber, fleetSize, referralSource } = req.body;

    try {
      const webhookRes = await fetch("https://services.leadconnectorhq.com/hooks/8Q12QNIJ4qhBpVA4mD89/webhook-trigger/a439da60-3a43-4897-ae1d-589b2d0d4f8c", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          dotNumber,
          fleetSize,
          referralSource,
          source: "Driver Recap Pricing Page"
        }),

