// src/components/Auth.js
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebase";

const Auth = () => {
  const handleSignUp = async () => {
    const auth = getAuth(firebaseApp);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        "example@email.com",
        "password123@zerzer"
      );
      const user = userCredential.user;
      console.log("User signed up:", user);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div>
      <h2>Authentication</h2>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default Auth;
