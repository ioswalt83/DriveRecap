pages/api/lead.ts

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, dotNumber, fleetSize, referralSource } = req.body;

    try {
      const webhookRes = await fetch("https://services.leadconnectorhq.com/hooks/8Q12QNIJ4qhBpVA4mD89/webhook-trigger/a439da60-3a43-4897-ae1d-589b2d0d4f8c", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          dotNumber,
          fleetSize,
          referralSource,
          source: "Driver Recap Pricing Page"
        }),
      });

      if (!webhookRes.ok) {
        throw new Error(`GHL webhook failed: ${webhookRes.statusText}`);
      }

      return res.status(200).json({ success: true });
    } catch (err) {
      console.error("Webhook Error:", err);
      return res.status(500).json({ error: "Webhook submission failed" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
