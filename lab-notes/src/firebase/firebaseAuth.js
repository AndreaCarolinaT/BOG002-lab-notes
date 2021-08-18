import { auth } from './firebaseConfig.js';

const SigupUser = (email, pass) => {
    return (
        auth.createUserWithEmailAndPassword(email, pass)
            .then(() => alert('Usuario registrado exitosamente'))
    );
};

export default SigupUser