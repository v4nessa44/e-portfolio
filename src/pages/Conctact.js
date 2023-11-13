import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'


import './styles/Form.css'
const Conctact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [errorMessage, setErrorMessage] = useState('')
  const [error, setError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault(); // to avoid page reload

    if (name === '') {
      setError(true)
      setErrorMessage('Please enter your name')
      return
    }


    if (email === '') {
      setError(true)
      setErrorMessage('Please enter your email')
      return
    }


    if (message === '') {
      setError(true)
      setErrorMessage('Please enter your message')
      return
    }

    setError(false)
    setErrorMessage('')
    setName('')
    setEmail('')
    setMessage('')

  }


  return (
    <div>
      <Header />

      <form onSubmit={handleSubmit}>

        <h1>Contact</h1>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name"

            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"

            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"

            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
        </div>


        {
          error === true ? <p>
            {errorMessage}
          </p> :
            ''
        }


        {/* button */}
        <button type="submit" className="btn btn-primary">Submit</button>

      </form>

      <Footer />
    </div>
  )
}

export default Conctact