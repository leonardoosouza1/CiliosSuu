

import { useHistory } from 'react-router-dom';



import logoImg from '../assets/images/Ativo 1@4x.png';
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
        <div id="main">
            <nav id="nav">
                <div>
                    <img src={logoImg} alt="logo" />
                    <input type="search"
                        placeholder="Busca"
                    />
                </div>
            </nav>
            <div id="page-auth">
                <aside>
                    <div>
                        <tbody>
                            <tr>
                                <h1>Produto</h1>
                            </tr>
                            <tr>
                                <h1>Produto</h1>
                            </tr>
                            <tr>
                                <h1>Produto</h1>
                            </tr>
                            <tr>
                                <h1>Produto</h1>
                            </tr>
                            <tr>
                                <h1>Produto</h1>
                            </tr>
                            <tr>
                                <h1>Produto</h1>
                            </tr>
                            <tr>
                                <h1>Produto</h1>
                            </tr>
                            <tr>
                                <h1>Produto</h1>
                            </tr>
                        </tbody>
                    </div>
                </aside>
                <main>
                    <div className="main-content">
                        <button onClick={handleCreateRoom} className="create-room">
                            <img src={googleIconImg} alt="" />
                            Faça login com o Google
                        </button>
                        <div className="separator" >
                            Ou entre com uma conta abaixo
                        </div>
                        <form>
                            <input type="text"
                                placeholder="Digite seu e-mail"
                            />
                            <input type="password"
                                placeholder="Digite sua senha"
                            />
                            <Button type="submit">
                                Entrar
                            </Button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    )
}