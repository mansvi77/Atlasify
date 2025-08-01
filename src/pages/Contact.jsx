

export const Contact = () => {

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission (page reload)
    const formData = new FormData(event.target); // Collect form data from the submitted form element
    const formInputData = Object.fromEntries(formData.entries());
    console.log("Form data submitted:", formInputData);
    // You can add further processing here (e.g., sending data to a server)
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            name="username"
            required
            autoComplete="off"
          />
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="off"
          />
          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
