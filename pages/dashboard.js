export default function Dashboard() {
return (
<div
style={{
backgroundColor: "#0f172a",
color: "white",
minHeight: "100vh",
padding: "20px",
fontFamily: "Arial",
}}
>
<h1 style={{ fontSize: "40px", color: "#8b5cf6" }}>
📚 StoryBookVerse Dashboard </h1>

```
  <p style={{ color: "#cbd5e1" }}>
    Welcome back reader 👋
  </p>

  {/* Stats Section */}
  <div
    style={{
      display: "flex",
      gap: "15px",
      marginTop: "30px",
      flexWrap: "wrap",
    }}
  >
    <div
      style={{
        backgroundColor: "#1e293b",
        padding: "20px",
        borderRadius: "15px",
        width: "150px",
      }}
    >
      <h2>🔥 7</h2>
      <p>Day Streak</p>
    </div>

    <div
      style={{
        backgroundColor: "#1e293b",
        padding: "20px",
        borderRadius: "15px",
        width: "150px",
      }}
    >
      <h2>⭐ 120</h2>
      <p>Points</p>
    </div>

    <div
      style={{
        backgroundColor: "#1e293b",
        padding: "20px",
        borderRadius: "15px",
        width: "150px",
      }}
    >
      <h2>📖 5</h2>
      <p>Stories Read</p>
    </div>
  </div>

  {/* Continue Reading */}
  <div
    style={{
      marginTop: "40px",
      backgroundColor: "#1e293b",
      padding: "20px",
      borderRadius: "15px",
    }}
  >
    <h2>Continue Reading</h2>

    <p style={{ color: "#cbd5e1" }}>
      The Dark Forest — Mystery/Horror
    </p>

    <a href="/stories">
      <button
        style={{
          marginTop: "15px",
          padding: "12px 25px",
          backgroundColor: "#8b5cf6",
          border: "none",
          borderRadius: "10px",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Read Now
      </button>
    </a>
  </div>

  {/* Quiz Section */}
  <div
    style={{
      marginTop: "40px",
      backgroundColor: "#1e293b",
      padding: "20px",
      borderRadius: "15px",
    }}
  >
    <h2>🧠 Daily Quiz</h2>

    <p style={{ color: "#cbd5e1" }}>
      Answer quizzes from stories and earn points.
    </p>

    <button
      style={{
        marginTop: "10px",
        padding: "10px 20px",
        backgroundColor: "#06b6d4",
        border: "none",
        borderRadius: "10px",
        color: "white",
      }}
    >
      Start Quiz
    </button>
  </div>

  {/* Audio Books */}
  <div
    style={{
      marginTop: "40px",
      backgroundColor: "#1e293b",
      padding: "20px",
      borderRadius: "15px",
    }}
  >
    <h2>🎧 Audio Stories</h2>

    <p style={{ color: "#cbd5e1" }}>
      Listen to suspense stories anytime.
    </p>

    <button
      style={{
        marginTop: "10px",
        padding: "10px 20px",
        backgroundColor: "#f43f5e",
        border: "none",
        borderRadius: "10px",
        color: "white",
      }}
    >
      Listen Now
    </button>
  </div>
</div>
```

);
}
