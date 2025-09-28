
// import { useEffect, useState } from "react";

// export default function App() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [announcements, setAnnouncements] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // const API_URL = "http://localhost:4000/announcements";
//   const API_URL = "https://gobasera-b.onrender.com/announcements";

//   // Fetch announcements on load
//   useEffect(() => {
//     fetchAnnouncements();
//   }, []);

//   async function fetchAnnouncements() {
//     try {
//       setLoading(true);
//       const res = await fetch(API_URL);
//       if (!res.ok) throw new Error("Failed to fetch announcements");
//       const data = await res.json();
//       setAnnouncements(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title, description }),
//       });

//       if (!res.ok) throw new Error("Failed to create announcement");
//       const newItem = await res.json();
//       setAnnouncements((prev) => [newItem, ...prev]); // prepend new
//       setTitle("");
//       setDescription("");
//     } catch (err) {
//       setError(err.message);
//     }
//   }

//   async function updateStatus(id, status) {
//     try {
//       const res = await fetch(`${API_URL}/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ status }),
//       });

//       if (!res.ok) throw new Error("Failed to update status");
//       const updated = await res.json();

//       setAnnouncements((prev) =>
//         prev.map((a) => (a.id === id ? updated : a))
//       );
//     } catch (err) {
//       setError(err.message);
//     }
//   }

//   return (

// <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}>
//   <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📢 Announcements</h1>

//   {/* Branding section */}
//   <div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       gap: "8px",
//       marginBottom: "1.5rem",
//     }}
//   >
//     <img
//       src="https://media.licdn.com/dms/image/v2/D560BAQEV4NXSrxZtVw/company-logo_200_200/B56Zh2ma7PHUAQ-/0/1754336440472?e=1759968000&v=beta&t=FQ9LWaC0EAXaf0xOh5GPR5587GXlC4ofXYXE-U0bgVI"  // 🔹 replace with your actual logo path
//       alt="GoBasera Logo"
//       style={{ width: "28px", height: "28px", objectFit: "contain" }}
//     />
//     <span
//       style={{
//         fontSize: "1.1rem",
//         fontWeight: "600",
//         color: "#444",
//       }}
//     >
//       GoBasera
//     </span>
//   </div>

//   <hr style={{ border: "0.5px solid #eee", marginBottom: "1.5rem" }} />


//       {/* Form */}
//       <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
//         <div>
//           <input
//             type="text"
//             placeholder="Title (required)"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             style={{
//               width: "70%",
//               padding: "0.7rem",
//               marginBottom: "0.7rem",
//               border: "1px solid #ccc",
//               borderRadius: "6px",
//               fontSize: "1rem",
//               outline: "none",
//               transition: "all 0.2s ease-in-out",
//             }}
//           />
//         </div>
//         <div>
//           <textarea
//             placeholder="Description (optional)"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             style={{
//               width: "70%",
//               padding: "0.7rem",
//               marginBottom: "0.7rem",
//               border: "1px solid #ccc",
//               borderRadius: "6px",
//               fontSize: "1rem",
//               outline: "none",
//               transition: "all 0.2s ease-in-out",
//             }}
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={!title}
//           style={{
//             padding: "0.5rem 1rem",
//             background: title ? "#007bff" : "#ccc",
//             color: "white",
//             border: "none",
//             cursor: title ? "pointer" : "not-allowed",
//           }}
//         >
//           Add Announcement
//         </button>
//       </form>

//       {error && <p style={{ color: "red" }}>⚠ {error}</p>}

//       {/* Feed */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : announcements.length === 0 ? (
//         <p>No announcements yet.</p>
//       ) : (
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {announcements.map((a) => (
//             <li
//               key={a.id}
//               style={{
//                 border: "1px solid #ddd",
//                 borderRadius: "8px",
//                 padding: "1rem",
//                 marginBottom: "0.5rem",
//               }}
//             >
//               {/* Title + Status + Date in one row */}
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <h3 style={{ margin: 0 }}>
//                   {a.title}{" "}
//                   <span
//                     style={{
//                       fontSize: "0.9rem",
//                       color: a.status === "active" ? "green" : "gray",
//                     }}
//                   >
//                     ({a.status})
//                   </span>
//                 </h3>

//                 {/* ✅ Date on the right */}
//                 <small
//                   style={{
//                     color: "#666",
//                     fontSize: "0.8rem",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "4px",
//                   }}
//                 >
//                   <img
//                     src="https://thumb.ac-illust.com/94/94316b681605212a8b1e20d01692369e_t.jpeg"
//                     alt="clock icon"
//                     style={{ width: "14px", height: "14px" }}
//                   />
//                   {new Date(a.createdAt).toLocaleString()}
//                 </small>
//               </div>

//               {/* Description */}
//               {a.description && <p>{a.description}</p>}

//               {/* ✅ ClosedAt timestamp */}
//               {a.status === "closed" && a.closedAt && (

//                 <p
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "6px",
//                     fontSize: "0.7rem",
//                     color: "#d9534f",
//                     marginTop: "0.5rem",
//                      }}
//                   >
//                     <img
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHzOtze9eQ1UERSVqmGZVbht4YJxSG2czCG5MFRaW8NenUoROxccWuDGRYIPfacqQZQc&usqp=CAU"
//                     alt="clock icon"
//                     style={{ width: "14px", height: "14px" }}
//                   />
//                   <strong>Closed at:</strong>{" "}
//                   {new Date(a.closedAt).toLocaleString()}
//                 </p>
//               )}

//               {/* Close button only if active */}
//               {a.status === "active" && (
//                 <button
//                   onClick={() => updateStatus(a.id, "closed")}
//                   style={{
//                     padding: "0.3rem 0.6rem",
//                     background: "tomato",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "4px",
//                     cursor: "pointer",
//                     marginTop: "0.5rem",
//                   }}
//                 >
//                   Close
//                 </button>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }



//====================================

import { useEffect, useState, useRef } from "react";


// const API_URL = "http://localhost:4000/announcements";

const API_URL = import.meta.env.VITE_API_URL;



export default function App() {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const etagRef = useRef(null);

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      const headers = {};
      if (etagRef.current) headers["If-None-Match"] = etagRef.current;
      const res = await fetch(API_URL, { headers });
      if (res.status === 304) return;
      if (!res.ok) throw new Error("Failed to fetch announcements");
      const data = await res.json();
      const etag = res.headers.get("ETag");
      if (etag) etagRef.current = etag;
      setAnnouncements(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to create announcement");
      }
      const newItem = await res.json();
      setAnnouncements((prev) => [newItem, ...prev]);
      setTitle("");
      setDescription("");
    } catch (err) {
      setError(err.message);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      const updated = await res.json();
      setAnnouncements((prev) => prev.map((a) => (a.id === id ? updated : a)));
    } catch (err) {
      setError(err.message);
    }
  };

  const addReaction = async (announcementId, type) => {
    setAnnouncements((prev) =>
      prev.map((a) =>
        a.id === announcementId
          ? { ...a, reactions: { ...a.reactions, [type]: (a.reactions?.[type] || 0) + 1 } }
          : a
      )
    );
    try {
      await fetch(`${API_URL}/${announcementId}/reactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": `${announcementId}-${type}`,
          "x-user-id": "user123",
        },
        body: JSON.stringify({ type }),
      });
    } catch {
      setAnnouncements((prev) =>
        prev.map((a) =>
          a.id === announcementId
            ? { ...a, reactions: { ...a.reactions, [type]: (a.reactions?.[type] || 1) - 1 } }
            : a
        )
      );
      setError("Failed to add reaction");
    }
  };

  const addComment = async (announcementId, text) => {
    const tempId = Date.now();
    setAnnouncements((prev) =>
      prev.map((a) =>
        a.id === announcementId
          ? { ...a, comments: [{ id: tempId, authorName: "You", text }, ...(a.comments || [])] }
          : a
      )
    );

    try {
      const res = await fetch(`${API_URL}/${announcementId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ authorName: "You", text }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to add comment");
      }
      const newComment = await res.json();
      setAnnouncements((prev) =>
        prev.map((a) =>
          a.id === announcementId
            ? {
                ...a,
                comments: a.comments.map((c) => (c.id === tempId ? newComment : c)),
              }
            : a
        )
      );
    } catch (err) {
      setAnnouncements((prev) =>
        prev.map((a) =>
          a.id === announcementId
            ? { ...a, comments: a.comments.filter((c) => c.id !== tempId) }
            : a
        )
      );
      setError(err.message);
    }
  };

  return (


    <div style={{ maxWidth: 650, margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>

      <div style={{ maxWidth: 650, margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
  
  {/* Branding Section */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "1.5rem",
    }}
  >
    <img
      src="https://media.licdn.com/dms/image/v2/D560BAQEV4NXSrxZtVw/company-logo_200_200/B56Zh2ma7PHUAQ-/0/1754336440472?e=1759968000&v=beta&t=FQ9LWaC0EAXaf0xOh5GPR5587GXlC4ofXYXE-U0bgVI"
      alt="GoBasera Logo"
      style={{ width: "28px", height: "28px", objectFit: "contain" }}
    />
    <span
      style={{
        fontSize: "1.1rem",
        fontWeight: "600",
        color: "#444",
      }}
    >
      GoBasera
    </span>
  </div>

  <hr style={{ border: "0.5px solid #eee", marginBottom: "1.5rem" }} />

  <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem", color: "#0056b3" }}>📢 Announcements</h1>
  
</div>


      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "70%",
            padding: "0.7rem",
            marginBottom: "0.7rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "70%",
            padding: "0.7rem",
            marginBottom: "0.7rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={!title}
          style={{
            padding: "0.6rem 1.2rem",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: title ? "pointer" : "not-allowed",
            transition: "all 0.2s",
          }}
        >
          Add Announcement
        </button>
      </form>

      {error && <p style={{ color: "red" }}>⚠ {error}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : announcements.length === 0 ? (
        <p>No announcements yet.</p>
      ) : (
        announcements.map((a) => (
          <div
            key={a.id}
            style={{
              border: "1px solid #ddd",
              margin: "1rem 0",
              padding: "1rem",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ marginBottom: "0.3rem" }}>
              {a.title}{" "}
              <span style={{ fontSize: "0.9rem", color: a.status === "active" ? "green" : "gray" }}>
                ({a.status})
              </span>
            </h3>

            {/* Created At */}
            {a.createdAt && (
              <small style={{ color: "#666", fontSize: "0.8rem" }}>
                Created: {new Date(a.createdAt).toLocaleString()}
              </small>
            )}

            <p>{a.description}</p>

            {/* Reactions */}
            <div style={{ display: "flex", gap: "0.5rem", margin: "0.5rem 0" }}>
              <button onClick={() => addReaction(a.id, "up")} style={reactionButtonStyle}>
                👍 {a.reactions?.up || 0}
              </button>
              <button onClick={() => addReaction(a.id, "down")} style={reactionButtonStyle}>
                👎 {a.reactions?.down || 0}
              </button>
              <button onClick={() => addReaction(a.id, "heart")} style={reactionButtonStyle}>
                ❤️ {a.reactions?.heart || 0}
              </button>
            </div>

            {/* Closed At */}
            {a.status === "closed" && a.closedAt && (
              <p style={{ fontSize: "0.8rem", color: "#d9534f", marginTop: "0.3rem" }}>
                Closed: {new Date(a.closedAt).toLocaleString()}
              </p>
            )}

            {/* Close button */}
            {a.status === "active" && (
              <button
                onClick={() => updateStatus(a.id, "closed")}
                style={{
                  padding: "0.4rem 0.8rem",
                  background: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginBottom: "0.5rem",
                }}
              >
                Close
              </button>
            )}

            {/* Comments */}
            <div>
              <h4>Comments:</h4>
              {(a.comments || []).map((c) => (
                <p key={c.id} style={{ margin: "0.2rem 0" }}>
                  <strong>{c.authorName}:</strong> {c.text}
                </p>
              ))}
              <AddCommentForm announcementId={a.id} onAddComment={addComment} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

// Comment form component
function AddCommentForm({ announcementId, onAddComment }) {
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setSubmitting(true);
    await onAddComment(announcementId, text);
    setText("");
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem", marginTop: "0.3rem" }}>
      <input
        type="text"
        placeholder="Add a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={submitting}
        style={{ flex: 1, padding: "0.4rem", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <button
        type="submit"
        disabled={submitting || !text.trim()}
        style={{
          padding: "0.4rem 0.8rem",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: submitting || !text.trim() ? "not-allowed" : "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
}

const reactionButtonStyle = {
  padding: "0.4rem 0.8rem",
  border: "none",
  borderRadius: "5px",
  background: "#007bff",
  color: "white",
  cursor: "pointer",
  transition: "all 0.2s",
};
