import { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Form } from 'react-bootstrap';

const users = [{ id: 1, user: 'Haris' }]; //Simulated user data

export default function Login() {
    const [username, setUsername] = useState('');
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleLogin = () => {
        const foundUser = users.find((u) => u.user === username);
        if (foundUser) {
            setUser(foundUser);
            navigate('/add');
        } else {
            alert('User not found');
        }
    };

    return (
        <Container>
            <h1 className='my-3'>Login</h1>
            <Form.Group className='mb-3'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    required
                />
            </Form.Group>
            <Button onClick={handleLogin}>Login</Button>
        </Container>
    );
}