function Form() {
  return (
    <>
      <h1>Sens Us Question</h1>
      <hr />
      <div className="form-container">
        <form>
          <label className="form-control">
            <span>Your Email:</span>
            <input type="text" />
          </label>

          <label className="form-control">
            <span>Your Password:</span>
            <textarea></textarea>
          </label>
          <button className="button"> send</button>
        </form>
      </div>
    </>
  );
}
export default Form;
