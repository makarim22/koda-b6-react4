import { useState, useEffect } from "react";

function Contact() {
  const [contacts, setContacts] = useState(() => {
    try {
      const savedData = localStorage.getItem("contactFormData");
      return savedData ? JSON.parse(savedData) : [];
    } catch (error) {
      console.error("Failed to parse localStorage data:", error);
      return [];
    }
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    localStorage.setItem("contactFormData", JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: contacts.length + 1,
      ...formData,
    };

    if (contacts.length > 0) {
      setContacts([...contacts, newContact]);
    } else {
      setContacts([newContact]);
    }
    alert("Pesan berhasil dikirim!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

 return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row flex-grow"> 
        <div className="flex flex-col items-center bg-blue-500 w-1/2 justify-center p-8 text-center"> 
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <h2 className="text-lg">
            We Are Committed to processing the information in order to contact
            you and talk about your project
          </h2>
        </div>

        <form
          className="flex flex-col bg-yellow-500 w-1/2 p-8" 
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nama:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Pesan:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Kirim
          </button>
        </form>
      </div>

      <div className="flex flex-row bg-red-300 h-[250px] justify-center p-4 "> 
        {contacts.length > 0 && (
          <div className="w-full max-w-2xl"> 
            <h3 className="text-xl font-semibold mb-4">Pesan Pelanggan({contacts.length})</h3>
            <div className="space-y-4"> 
              {contacts.map((contact) => (
                <div key={contact.id} className="bg-white p-4 rounded shadow">
                  <p>
                    <strong>Nama:</strong> {contact.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {contact.email}
                  </p>
                  <p>
                    <strong>Pesan:</strong> {contact.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
