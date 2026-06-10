export default function Home() {
  return (
    <div style={{padding:'40px',fontFamily:'Arial'}}>
      <h1>📖 StoryBookVerse</h1>
      <p>A world of stories, mysteries, and adventures.</p>

      <div style={{marginTop:'20px'}}>
        <a href="/stories">Stories</a>
      </div>

      <div style={{marginTop:'10px'}}>
        <a href="/dashboard">Dashboard</a>
      </div>

      <div style={{marginTop:'10px'}}>
        <a href="/admin">Admin Panel</a>
      </div>
    </div>
  )
}