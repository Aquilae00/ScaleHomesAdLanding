import crypto from "crypto";
import { nanoid } from "nanoid";
function hash(value) {
    return crypto.createHash("sha256").update(value).digest("hex");
}
function jsonToKeyValueList(json) {
    const keyValueList = [];
    for (const [key, value] of Object.entries(json)) {
        if (typeof value === "object" && value !== null) {
            // Recursively handle nested objects
            keyValueList.push(...jsonToKeyValueList(value).map((subKey) => `${key}.${subKey}`));
        } else {
            keyValueList.push(`${key}=${value}`);
        }
    }
    return keyValueList;
}
export async function POST(request) {
    const clientIp =
        request.headers.get("x-forwarded-for") || request.headers.get("cf-connecting-ip") || "";
    const clientAgent = request.headers.get("user-agent") || "unknown";
    const body = await request.json();
    const url = `https://graph.facebook.com/v23.0/24330857359900639/events?access_token=${process.env.FACEBOOK_PIXEL_ACCESS_TOKEN}`;
    const { name, phone,message, ...tags } = body;
    const firstName = name.split(" ")[0];
    const lastName = name.split(" ")[1] || "";
    const apiUrl = "https://api.followupboss.com/v1/events";

    try {
        const payload2 = {
            source: "PPC",
            type: "Registration",
            person: {
                firstName,
                lastName,
                stage: "Lead",
                source: "PPC",
                contacted: false,
                phones: [
                    {
                        value: phone,
                        type: "mobile",
                    },
                ],
                tags: [...jsonToKeyValueList(tags)],
            },
            message,
            occurredAt: new Date().toISOString(),
        };
        const response2 = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + btoa(process.env.FOLLOWUP_BOSS_API_KEY + ":"),
            },
            body: JSON.stringify(payload2),
        });
        // console.log(response2);
        return new Response(null, { status: 200, statusText: "Lead created successfully" });
    } catch (err) {
        console.error("Error creating lead:", err);
        return new Response(null, { status: 500, statusText: "Failed to create lead" });
    }
}
