exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ valid: false, message: 'Method not allowed' })
    };
  }

  try {
    const { code } = JSON.parse(event.body || '{}');
    const masterCode = process.env.MASTER_CODE;

    if (!masterCode) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ valid: false, message: 'Master code not configured' })
      };
    }

    const valid = typeof code === 'string' && code.trim() === masterCode;
    return {
      statusCode: valid ? 200 : 401,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ valid })
    };
  } catch (error) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ valid: false, message: 'Invalid request' })
    };
  }
};
