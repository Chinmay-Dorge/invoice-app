
function App() {
  const handlePrint = () => {
    window.print();
  }

  return (
    <>
      <main className="p-5 m-5 xl:max-w-4xl xl:mx-auto bg-white rouned shadow">
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <h2 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoice App</h2>
          </div>

          <div>
            <ul className='flex items-center justify-between flex-wrap'>
              <li><button onClick={handlePrint} className='btn btn-print'>Print</ button></li>
              <li><button className="btn btn-download">Download</button></li>
              <li><button className="btn btn-send">Send</button></li>
            </ul>
          </div>
        </header>

        <section className="flex flex-col items-end justify-end">
          <h2 className="text-xl upercase">Your Name</h2>
          <p>Your Address</p>
        </section>

        <section className="mt-5">
          <h2 className="text-xl upercase">Client Name</h2>
          <p>Client Address</p>
        </section>

        <article className="my-5 flex items-end justify-end">
          <ul>
            <li><span className="font-bold">Invoicer no: </span></li>
            <li><span className="font-bold">Invoicer Date: </span></li>
            <li><span className="font-bold">Due Date: </span></li>
          </ul>
        </article>

        <div className="my-5">Table</div>

        <section className="mb-5">
          <p>Notes to client</p>
        </section>

        <footer>
          <ul className="flex flex-wrap justify-center items-center">
            <li><span className="font-bold">Your Name: </span>Chinmay </li>
            <li><span className="font-bold">Your email: </span>chinmaydorge2002@gmail.com</li>
            <li><span className="font-bold">Phone Number: </span>987654321</li>
            <li><span className="font-bold">Bank: </span>Bank Account</li>
            <li><span className="font-bold">Account holder: </span>Chinmay</li>
            <li><span className="font-bold">Account Number: </span>1234567890</li>
            <li><span className="font-bold">Website: </span>www.google.com</li>
          </ul>
        </footer>

      </main>
    </>
  );
}

export default App;
