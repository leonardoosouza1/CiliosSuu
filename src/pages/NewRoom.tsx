
import { Link } from 'react-router-dom';

import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/teste.svg';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';


export function NewRoom() {
    const { user } = useAuth();

    return (
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="Ilustração" />
                <strong>Oh feio crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire duvidas sobre tainha online</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Fala feio" className="logo" />
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o códido da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}