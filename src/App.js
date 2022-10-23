import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
    return (
        <div className="h-screen flex items-center justify-evenly">
            <Signin />
            <Signup />
        </div>
    );
}

export default App;
