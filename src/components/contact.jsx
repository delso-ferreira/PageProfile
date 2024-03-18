import { useState, useEffect } from 'react';
import '../styles/contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState({show: false, message: '', type: ''});
    const [_alertType, setAlertType] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (email === '' || name === '' || message === '') {
            setAlert({show: true, message: 'Preencha todos os campos', type: 'error'});
            setAlertType('danger');
            return 'Preencha todos os campos';
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message,
        };

        emailjs.send('service_3ds45ev', 'template_emd95dh', templateParams, 'ztijiZqAUQ0WFVbLe')
            .then((result) => {
                console.log('enviado com sucesso', result.status, result.text);
                setName('');
                setEmail('');
                setMessage('');
                setAlert({show: true, message: 'Mensagem enviada com sucesso', type: 'success'});
                setAlertType('success');
            })
            .catch((error) => {
                setAlert({show: true, message: 'Erro ao enviar mensagem', type: 'error'});
                setAlertType('danger');
                console.log('erro ao enviar', error);
            });
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlert({ ...alert, show: false });
        }, 1500);

        return () => clearTimeout(timer);
    }, [alert]);

    return (
        <div className="main-container-contact" id='contact'>            
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id='name'
                            name="name"
                            maxLength={50}
                            value={name}
                            placeholder='Digite seu nome'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id='email'
                            name='email'
                            maxLength={40}
                            value={email}
                            placeholder='Digite seu email'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensagem:</label>
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            value={message}
                            placeholder='Digite sua mensagem'
                            onChange={(e) => setMessage(e.target.value)}
                            maxLength={500}
                        />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Enviar</button>                   
                </form>
            </div>
      
    );
}

export default Contact;
