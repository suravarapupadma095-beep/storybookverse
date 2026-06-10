export default function Stories() {
  return (
    <div style={{padding:'40px'}}>
      <h1>Stories</h1>

      <div style={{border:'1px solid gray',padding:'20px',marginTop:'20px'}}>
        <h2>The Dark Forest</h2>

        <p>
          Something was hiding deep inside the forest...
        </p>

        <button>Unlock Reading ₹29</button>
        <button style={{marginLeft:'10px'}}>Audio ₹39</button>
      </div>

      <div style={{marginTop:'30px'}}>
        <h3>Community Comments</h3>

        <div style={{border:'1px solid #999',padding:'10px',marginBottom:'10px'}}>
          User123: I think the creature is the king!
        </div>

        <div style={{border:'1px solid #999',padding:'10px'}}>
          StoryFan: The ending shocked me!
        </div>

        <textarea placeholder="Write your comment..." rows="4" cols="40" style={{marginTop:'20px'}}></textarea>
      </div>
    </div>
  )
}