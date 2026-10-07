import "./App.css";

function ProfileCard(props) {
    return (
        <div className="profile-card">

            <img
                src={props.image}
                alt={props.name}
                className="profile-image"
            />

            <h2>{props.name}</h2>

            <p>{props.description}</p>

        </div>
    );
}

function App() {
    return (
        <div className="container">

            <h1>React Profile Card</h1>

            <ProfileCard
                name="Saniya Kade"
                image="https://via.placeholder.com/150"
                description="Computer Science student interested in web development, JavaScript and React."
            />

        </div>
    );
}

export default App;