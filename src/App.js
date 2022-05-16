import ClientDetails from "./components/ClientDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Dates from './components/Dates';
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";
import { useState, useRef } from 'react';

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [website, setWebsite] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  }
  return (
    <>
      <main className="p-5 m-5 xl:max-w-4xl lg:mx-w-2xl xl:mx-w-4xl bg-white rouned shadow md:max-w-xl md:mx-auto">
        {showInvoice ? <>
          <ReactToPrint trigger={() => <button className='bg-gray-500 mb-5 py-2 px-8  text-white rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300'>Print/Download</button>}
            content={() => componentRef.current} />
          <div ref={componentRef} className="p-5">
            <Header handlePrint={handlePrint} />
            <MainDetails name={name} address={address} />
            <ClientDetails clientName={clientName} clientAddress={clientAddress} />
            <Dates invoiceDate={invoiceDate} invoiceNumber={invoiceNumber} dueDate={dueDate} />
            <Table list={list} total={total} setTotal={setTotal} />
            <Notes notes={notes} />
            <Footer name={name} email={email} website={website} bankAccount={bankAccount} bankName={bankName} phone={phone} />
          </div>
          <button onClick={() => setShowInvoice(false)}
            className="bg-blue-500 py-2 px-8  text-white rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>

        </>

          : (
            <>
              <div className="flex flex-col justify-center">
                <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="name">Your Full name</label>
                    <input type='text' name="text" id='name' placeholder="Enter your name" autoComplete='off' value={name} onChange={(e) => setName(e.target.value)}></input>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="address">Your address</label>
                    <input type='text' name="address" id='address' placeholder="Enter your address" autoComplete='off' value={address} onChange={(e) => setAddress(e.target.value)}></input>
                  </div>
                </article>

                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="email">Enter your email address</label>
                    <input type='email' name="email" id='email' placeholder="Enter your email" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)}></input>

                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="website">Enter website</label>
                    <input type='url' name="website" id='website' placeholder="Enter your website" autoComplete='off' value={website} onChange={(e) => setWebsite(e.target.value)}></input>

                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone">Enter your phone number</label>
                    <input type='text' name="phone" id='phone' placeholder="Enter your phone" autoComplete='off' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                  </div>
                </article>

                <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="bankName">Enter the name of your bank</label>
                    <input type='text' name="bankName" id='bankName' placeholder="Enter your bank name" autoComplete='off' value={bankName} onChange={(e) => setBankName(e.target.value)}></input>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="bankAccount">Enter bank account number</label>
                    <input type='text' name="bankAccount" id='bankAccount' placeholder="Enter your bank account number" autoComplete='off' value={bankAccount} onChange={(e) => setBankAccount(e.target.value)}></input>
                  </div>
                </article>

                <article className="md:grid grid-cols-2 gap-10 md:mt-20">
                  <div className="flex flex-col">
                    <label htmlFor="clientName">Enter Client Name</label>
                    <input type='text' name="clientName" id='clientName' placeholder="Enter your client name" autoComplete='off' value={clientName} onChange={(e) => setClientName(e.target.value)}></input>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="clientAddress">Enter Client Address</label>
                    <input type='text' name="clientAddress" id='clientAddress' placeholder="Enter your client address" autoComplete='off' value={clientAddress} onChange={(e) => setClientAddress(e.target.value)}></input>
                  </div>
                </article>

                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="invoiceNumber">Enter invoice number</label>
                    <input type='text' name="invoiceNumber" id='invoiceNumber' placeholder="Enter your invoiceNumber" autoComplete='off' value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)}></input>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="invoiceDate">Enter invoice date</label>
                    <input type='date' name="invoiceDate" id='invoiceDate' placeholder="Enter your invoice date" autoComplete='off' value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)}></input>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="dueDate">Enter due date</label>
                    <input type='date' name="dueDate" id='dueDate' placeholder="Enter your due date" autoComplete='off' value={dueDate} onChange={(e) => setDueDate(e.target.value)}></input>
                  </div>
                </article>

                <TableForm total={total} setTotal={setTotal} description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} amount={amount} setAmount={setAmount} list={list} setList={setList} />

                <label htmlFor="notes">Note</label>
                <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additional notes to the client" value={notes} onChange={(e) => setNotes(e.target.value)}  ></textarea>

                <button onClick={() => setShowInvoice(true)}
                  className="bg-blue-500 py-2 px-8  text-white rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>
              </div>
            </>
          )}
      </main>
    </>
  );
}

export default App;
