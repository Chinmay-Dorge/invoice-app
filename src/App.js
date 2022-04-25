import ClientDetails from "./components/ClientDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Dates from './components/Dates';

import { useState } from 'react';

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

  const handlePrint = () => {
    window.print();
  }
  return (
    <>
      <main className="p-5 m-5 xl:max-w-4xl lg:mx-w-2xl xl:mx-w-4xl bg-white rouned shadow md:max-w-xl md:mx-auto">
        {showInvoice ? <div>
          <Header handlePrint={handlePrint} />
          <MainDetails name={name} address={address} />
          <ClientDetails clientName={clientName} clientAddress={clientAddress}/>
          <Dates invoiceDate={invoiceDate} invoiceNumber={invoiceNumber} dueDate={dueDate}/>
          <Table />
          <Notes notes={notes}/>
          <Footer name={name} email={email} website={website} bankAccount={bankAccount} bankName={bankName} phone={phone} />
          <button onClick={() => setShowInvoice(false)}
            className="bg-blue-500 py-2 px-8  text-white rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>

        </div> : (
          <>
            <div className="flex flex-col justify-center">
              <label htmlFor="name"></label>
              <input type='text' name="text" id='name' placeholder="Enter your name" autoComplete='off' value={name} onChange = {(e) => setName(e.target.value)}></input>
              
              <label htmlFor="address"></label>
              <input type='text' name="address" id='address' placeholder="Enter your address" autoComplete='off' value={address} onChange = {(e) => setAddress(e.target.value)}></input>

              <label htmlFor="email"></label>
              <input type='email' name="email" id='email' placeholder="Enter your email" autoComplete='off' value={email} onChange = {(e) => setEmail(e.target.value)}></input>

              <label htmlFor="website"></label>
              <input type='url' name="website" id='website' placeholder="Enter your website" autoComplete='off' value={website} onChange = {(e) => setWebsite(e.target.value)}></input>

              <label htmlFor="phone"></label>
              <input type='text' name="phone" id='phone' placeholder="Enter your phone" autoComplete='off' value={phone} onChange = {(e) => setPhone(e.target.value)}></input>

              <label htmlFor="bankName"></label>
              <input type='text' name="bankName" id='bankName' placeholder="Enter your bank name" autoComplete='off' value={bankName} onChange = {(e) => setBankName(e.target.value)}></input>

              <label htmlFor="bankAccount"></label>
              <input type='text' name="bankAccount" id='bankAccount' placeholder="Enter your bank account number" autoComplete='off' value={bankAccount} onChange = {(e) => setBankAccount(e.target.value)}></input>

              <label htmlFor="clientName"></label>
              <input type='text' name="clientName" id='clientName' placeholder="Enter your client name" autoComplete='off' value={clientName} onChange = {(e) => setClientName(e.target.value)}></input>

              <label htmlFor="clientAddress"></label>
              <input type='text' name="clientAddress" id='clientAddress' placeholder="Enter your client address" autoComplete='off' value={clientAddress} onChange = {(e) => setClientAddress(e.target.value)}></input>

              <label htmlFor="invoiceNumber"></label>
              <input type='text' name="invoiceNumber" id='invoiceNumber' placeholder="Enter your invoiceNumber" autoComplete='off' value={invoiceNumber} onChange = {(e) => setInvoiceNumber(e.target.value)}></input>

              <label htmlFor="invoiceDate"></label>
              <input type='date' name="invoiceDate" id='invoiceDate' placeholder="Enter your invoice date" autoComplete='off' value={invoiceDate} onChange = {(e) => setInvoiceDate(e.target.value)}></input>

              <label htmlFor="dueDate"></label>
              <input type='date' name="dueDate" id='dueDate' placeholder="Enter your due date" autoComplete='off' value={dueDate} onChange = {(e) => setDueDate(e.target.value)}></input>

              <label htmlFor="notes"></label>
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
