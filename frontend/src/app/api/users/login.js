export default async function handler(req, res) {
  if (req.method === "POST") {
    // Check if the request method is POST
    try {
      const { email, password } = req.body; // Get email and password from request body

      // Send POST request to the backend (Express) server for user login
      const response = await fetch("http://localhost:4000/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        // body: JSON.stringify({ email, password }), // Send login data as JSON
      });

      const data = await response.json(); // Parse the response as JSON
      if (response.ok) {
        res.status(200).json({ token: data.token }); // Return JWT token if login is successful
      } else {
        res.status(400).json({ error: data.error }); // Return error message if login fails
      }
    } catch (error) {
      res.status(500).json({ error: "Error occurred while logging in." }); // Catch any error and return 500 status
    }
  } else {
    res.status(405).json({ error: "Method not allowed." }); // Return error if the request method is not POST
  }
}
