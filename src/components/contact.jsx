import React, { useState } from 'react';
import '../styles/contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Email enviado com sucesso');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                console.error('Erro ao enviar o email');
            }
        } catch (error) {
            console.error('Erro ao enviar o email:', error);
        }
    };

    return (
        <div className="main-container-contact" id='contact'>
            <div className="full-page-section-contact">                
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            maxLength={50}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            maxLength={40}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensagem:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            maxLength={500}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
