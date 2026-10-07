import "./App.css";

function ProfileCard(props) {
  return (
    <div className="profile-card">

      <div className="profile-top">
        <img
          src={props.image}
          alt={props.name}
          className="profile-image"
        />
      </div>

      <div className="profile-content">

        <h1>{props.name}</h1>

        <p className="role">{props.role}</p>

        <p className="description">
          {props.description}
        </p>

        <div className="info">
          <span>📍 {props.location}</span>
          <span>💻 {props.skill}</span>
        </div>

        <button className="profile-btn">
          View Profile
        </button>

      </div>

    </div>
  );
}

function App() {
  return (
    <div className="app">

      <h2 className="title">My Profile</h2>

      <ProfileCard
        name="Saniya Kade"
        role="MCA Student"
        description="Passionate about technology, web development and learning new skills."
        location="India"
        skill="Web Development"
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
      />

    </div>
  );
}

export default App;