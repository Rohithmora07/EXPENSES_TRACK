const BASE_URL = import.meta.env.VITE_API_URL || '';

/**
 * Shared fetch wrapper for the Express API.
 */
export async function apiRequest(url, options = {}) {
  const response = await fetch(`${BASE_URL}${url}`, options);
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(body.error || `Request failed (${response.status})`);
  }
  return body;
}