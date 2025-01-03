export default async function handler(req, res) {
  // Make sure the backend API is running on the right port (localhost:4000)
  const response = await fetch('http://localhost:4000/api/user/register', {
    method: req.method,
    headers: req.headers,
    body: req.body, // Pass along the body from the frontend (user data)
  });

  const data = await response.json();
  
  // Forward the backend response to the frontend
  res.status(response.status).json(data);
}