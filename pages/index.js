export default function Home() {
  return (
    <div style={{
      backgroundColor: "#0a0a0a",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{
        fontSize: "50px",
        color: "#8b5cf6"
      }}>
        STORYBOOKVERSE
      </h1>

      <p style={{
        fontSize: "20px",
        maxWidth: "600px"
      }}>
        Enter the world of suspense, mystery and legends.
      </p>
      <button style={{
        marginTop: "20px",
        padding: "15px 30px",
        backgroundColor: "#8b5cf6",
        border: "none",
        color: "white",
        borderRadius: "10px",
        fontSize: "18px"
      }}>
        Read Stories
      </button>

    </div>
  )
}