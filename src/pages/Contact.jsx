import { useState, useEffect } from 'react';

function Contact() {
    const [contacts, setContacts] = useState(() => {
        try {
            const savedData = localStorage.getItem('contactFormData');
            return savedData ? JSON.parse(savedData) : [];
        } catch (error) {
            console.error("Failed to parse localStorage data:", error);
            return [];
        }
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        localStorage.setItem('contactFormData', JSON.stringify(contacts));
    }, [contacts]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newContact = {
            id: contacts.length + 1,
            ...formData
        };

        if(contacts.length > 0){
            setContacts([...contacts, newContact]);
        } else {
            setContacts([newContact]);
        }

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div>
            <div>
                <h1>Contact Us</h1>
                <h2>We Are Committed to processing the information in order to contact you and talk about your project</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nama:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Pesan:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Kirim</button>
            </form>

            {contacts.length > 0 && (
                <div style={{ marginTop: '30px' }}>
                    <h3>Pesan Pelanggan({contacts.length})</h3>
                    {contacts.map(contact => (
                        <div key={contact.id}>
                            <p><strong>Nama:</strong> {contact.name}</p>
                            <p><strong>Email:</strong> {contact.email}</p>
                            <p><strong>Pesan:</strong> {contact.message}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Contact;