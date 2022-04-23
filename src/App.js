
function App() {
  const handlePrint = () => {
    window.print();
  }

  return (
    <>
      <main>
        <header>
          <div>
            <h2>Invoice App</h2>
          </div>

          <div>
            <ul>
              <li><button onCLick={handlePrint}>Print</ button></li>
              <li>Download</li>
              <li>Send</li>
            </ul>
          </div>
        </header>

        <section>
          <input type='text' name='text' id='text' placeholder='Enter your name' required/>
        </section>

      </main>
    </>
  );
}

export default App;
