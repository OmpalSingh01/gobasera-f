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
            style={{
        width: "70%",
        padding: "0.7rem",
        marginBottom: "0.7rem",
        border: "1px solid #ccc",
        borderRadius: "6px",
        fontSize: "1rem",
        outline: "none",
        transition: "all 0.2s ease-in-out",
      }}
          />
        </div> 
        <div>
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            
            style={{
        width: "70%",
        padding: "0.7rem",
        marginBottom: "0.7rem",
        border: "1px solid #ccc",
        borderRadius: "6px",
        fontSize: "1rem",
        outline: "none",
        transition: "all 0.2s ease-in-out",
      }}
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
      {/* Title + Status + Date in one row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0 }}>
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

        {/* ✅ Date on the right */}
       <small
  style={{
    color: "#666",
    fontSize: "0.8rem",
    display: "flex",
    alignItems: "center",
    gap: "4px", // spacing between image and text
  }}
>
  <img
    src="https://thumb.ac-illust.com/94/94316b681605212a8b1e20d01692369e_t.jpeg"
    alt="clock icon"
    style={{ width: "14px", height: "14px" }}
  />
  {new Date(a.createdAt).toLocaleString()}
</small>
      </div>

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
            marginTop: "0.5rem",
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
