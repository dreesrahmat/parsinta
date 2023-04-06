import Button from "./components/Button";
import Card from "./components/Card";

export default function App() {
    return (
        <div className='bg-slate-100 text-slate-800 tracking-tight antialiased flex justify-center items-center min-h-screen'>
            <div className='max-w-md w-full'>
                <Card>
                    <Card.Title>Hello React</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora amet fuga sit ipsa quam ipsam iure unde voluptatum! Dolores, tempore incidunt! Qui quibusdam unde ipsum sit ad, maiores debitis suscipit?
                        Cupiditate ipsam at est reprehenderit? Aspernatur esse totam blanditiis deserunt nobis expedita? Exercitationem numquam totam alias tempora, aperiam nam sunt. Accusantium mollitia vero doloremque blanditiis ipsa ea dolores quam enim.
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

