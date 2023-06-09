function Error({ error }) {
  return (
    <div className="section section-center text-center">
      <h2>there was an error</h2>
      <p>{error.message}</p>
    </div>
  );
}
export default Error;
