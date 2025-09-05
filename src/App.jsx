import { useEffect, useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // const API_URL = "http://localhost:4000/announcements";
  const API_URL = "https://gobasera-b.onrender.com/announcements";



  // Fetch announcements on load
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  async function fetchAnnouncements() {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch announcements");
      const data = await res.json();
      setAnnouncements(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (!res.ok) throw new Error("Failed to create announcement");
      const newItem = await res.json();
      setAnnouncements((prev) => [newItem, ...prev]); // prepend
      setTitle("");
      setDescription("");
    } catch (err) {
      setError(err.message);
    }
  }

  async function updateStatus(id, status) {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) throw new Error("Failed to update status");
      const updated = await res.json();

      setAnnouncements((prev) =>
        prev.map((a) => (a.id === id ? updated : a))
      );
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>📢 Announcements</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <div>
          <input
            type="text"
            placeholder="Title (required)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
          />
        </div>
        <div>
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
          />
        </div>
        <button
          type="submit"
          disabled={!title}
          style={{
            padding: "0.5rem 1rem",
            background: title ? "#007bff" : "#ccc",
            color: "white",
            border: "none",
            cursor: title ? "pointer" : "not-allowed",
          }}
        >
          Add Announcement
        </button>
      </form>

      {error && <p style={{ color: "red" }}>⚠ {error}</p>}

      {/* Feed */}
      {loading ? (
        <p>Loading...</p>
      ) : announcements.length === 0 ? (
        <p>No announcements yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {announcements.map((a) => (
            <li
              key={a.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                marginBottom: "0.5rem",
              }}
            >
              <h3>
                {a.title}{" "}
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: a.status === "active" ? "green" : "gray",
                  }}
                >
                  ({a.status})
                </span>
              </h3>
              {a.description && <p>{a.description}</p>}
              {a.status === "active" && (
                <button
                  onClick={() => updateStatus(a.id, "closed")}
                  style={{
                    padding: "0.3rem 0.6rem",
                    background: "tomato",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
