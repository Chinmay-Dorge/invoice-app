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
  const [clientName, setclientName] = useState('');
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
      <main className="p-5 m-5 xl:max-w-4xl xl:mx-auto bg-white rouned shadow">
        {showInvoice ? <div>
          <Header handlePrint={handlePrint} />
          <MainDetails name={name} address={address} />
          <ClientDetails />
          <Dates />
          <Table />
          <Notes />
          <Footer name={name} address={address} email={email} website={website}/>
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
