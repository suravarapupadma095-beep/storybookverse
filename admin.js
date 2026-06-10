export default function Admin() {
  return (
    <div style={{padding:'40px',fontFamily:'Arial'}}>
      <h1>🛡️ StoryBookVerse Admin Panel</h1>

      <div style={{marginTop:'30px',border:'1px solid gray',padding:'20px'}}>
        <h2>Moderate Comments</h2>

        <div style={{border:'1px solid #999',padding:'10px',marginBottom:'10px'}}>
          <p><strong>User123:</strong> This story is awesome!</p>
          <button>Delete Comment</button>
        </div>

        <div style={{border:'1px solid #999',padding:'10px',marginBottom:'10px'}}>
          <p><strong>BadUser:</strong> Example bad comment</p>
          <button>Delete Comment</button>
        </div>
      </div>

      <div style={{marginTop:'30px',border:'1px solid gray',padding:'20px'}}>
        <h2>Story Controls</h2>

        <button>Add Story</button>
        <button style={{marginLeft:'10px'}}>Edit Story</button>
      </div>

      <div style={{marginTop:'30px',border:'1px solid gray',padding:'20px'}}>
        <h2>User Controls</h2>

        <button>Ban User</button>
        <button style={{marginLeft:'10px'}}>View Reports</button>
      </div>
    </div>
  )
}