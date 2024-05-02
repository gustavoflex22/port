function ContactForm() {
    const handleSubmit = (event) => {
        const data = new FormData(event.target);
        event.preventDefault();
        console.log('Email:', data.get('email'));
        console.log('Nome:', data.get('name'));
    };
    console.log('Mensagem:', data.get('message'));

    return (
    <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Seu nome" required />
        <input name="email" type="email" placeholder="Seu email" required />
        <textarea name="message" placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar</button>
    </form>
    );
}