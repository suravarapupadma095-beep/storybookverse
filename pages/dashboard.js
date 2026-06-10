export default function Dashboard() {
  return (
    <div style={{
      backgroundColor: "#0a0a0a",
      color: "white",
      minHeight: "100vh",
      padding: "30px",
      fontFamily: "Arial"
    }}>

      <h1 style={{
        color: "#8b5cf6",
        fontSize: "45px"
      }}>
        Your Dashboard
      </h1>

      <div style={{
        backgroundColor: "#161616",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "30px"
      }}>
        <h2>Profile</h2>
        <p>Username: StoryReader</p>
      </div>

      <div style={{
        backgroundColor: "#161616",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "20px"
      }}>
        <h2>Points</h2>
        <p>120 Points</p>
      </div>

      <div style={{
        backgroundColor: "#161616",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "20px"
      }}>
        <h2>Reading Streak 🔥</h2>
        <p>7 Days</p>
      </div>

      <div style={{
        backgroundColor: "#161616",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "20px"
      }}>
        <h2>Purchased Stories</h2>
        <p>The Dark Forest</p>
      </div>

    </div>
  );
} 