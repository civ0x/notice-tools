export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://notice.tools',
  };

  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ error: 'Email is required.' }), {
        status: 400,
        headers,
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Please enter a valid email address.' }), {
        status: 400,
        headers,
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Insert into D1 — ignore duplicates
    await env.DB.prepare(
      'INSERT OR IGNORE INTO signups (email, signed_up_at) VALUES (?, ?)'
    ).bind(normalizedEmail, new Date().toISOString()).run();

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again.' }), {
      status: 500,
      headers,
    });
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': 'https://notice.tools',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
