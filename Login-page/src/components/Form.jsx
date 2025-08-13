const Form = ({username, setUsername, password , setPassword , onSubmit, headingText, buttonText,message}) => {

return (
    <main
      className="form-signin w-100 m-auto d-flex align-items-center py-4 bg-body-tertiary"
      style={{ minHeight: "100vh" }}
    >
      <form
        className="w-100"
        style={{ maxWidth: "330px", margin: "auto" }}
        onSubmit={onSubmit}
      >
        <h1 className="h3 mb-3 fw-normal">{headingText}</h1>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Username</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>password</label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">
          {buttonText}
        </button>

        <p className="mt-5 mb-3 text-muted text-center">{message}</p>
      </form>
    </main>




);
}


export default Form;