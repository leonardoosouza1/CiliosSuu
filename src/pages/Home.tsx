

import { useHistory } from 'react-router-dom';


import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/teste.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';

import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';


export function Home() {

    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    async function handleCreateRoom() {

        if (!user) {
            await signInWithGoogle()
        }
        history.push('/rooms/new');

    }

    return (
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="Ilustração" />
                <strong>Se tu dix</strong>
                <p>Não seje tanso e tira suas duvidas sobre tainha</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Fala feio" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="" />
                        Cria sua sala com o Google
                    </button>
                    <div className="separator" >
                        Ou entre em uma sala abaixo
                    </div>
                    <form>
                        <input type="text"
                            placeholder="Digite o códido da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}