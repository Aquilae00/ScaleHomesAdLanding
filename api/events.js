import { nanoid } from "nanoid";

export async function POST(request) {
    const clientIp =
        request.headers.get("x-forwarded-for") || request.headers.get("cf-connecting-ip") || "";
    const clientAgent = request.headers.get("user-agent") || "unknown";
    const url = `https://graph.facebook.com/v23.0/24330857359900639/events?access_token=${process.env.FACEBOOK_PIXEL_ACCESS_TOKEN}`;
    const ts = Math.floor(Date.now() / 1000);
    const body = await request.json();
    const fbp = request.headers.get("cookie")
        ? request.headers
              .get("cookie")
              .split("; ")
              .find((c) => c.startsWith("_fbp="))
              ?.split("=")[1]
        : null;
    const { fbc } = body;
    const payload1 = {
        data: [
            {
                event_name: "View Content",
                event_time: ts, // Facebook expects time in seconds
                action_source: "website",
                event_source_url: request.headers.get("referer") || "",
                event_id: nanoid(),
                user_data: {
                    client_ip_address: clientIp,
                    client_user_agent: clientAgent,
                    fbc,
                    fbp,
                },
            },
        ],
    };
    const response1 = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload1),
    });
    return new Response(null, { status: 200, statusText: "Lead created successfully" });
}
