// pages/api/lead.ts

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, dotNumber, fleetSize, referralSource } = req.body;

  try {
    const response = await fetch("https://services.leadconnectorhq.com/hooks/8Q12QNIJ4qhBpVA4mD89/webhook-trigger", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        dotNumber,
        fleetSize,
        referralSource,
        source: "Driver Recap Pricing Page"
      })
    });

    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.statusText}`);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
