'use client';
import '../styles/distributorForm.css';
import GreenNavbar from './Navbar-Green';
import {Link} from 'react-router-dom';

const DistributorForm = () => {

  return (
    <>
    <GreenNavbar />
    <section className="distributorForm">
    
    <div className="distributor-form__container">
    <h1 className="title">Form</h1>
        <form className="main-form">
            <div className="email">
            <label htmlFor="email" className="email-label">First Name</label>
            <input
                type="text"
                id="firstname"
                className="email-input"
                // onChange={(e) => setFirstName(e.target.value)}
                required
            />
            </div>
            <div className="email">
            <label htmlFor="email" className="email-label">Last Name</label>
            <input
                type="text"
                id="lastName"
                // onChange={(e) => setLastName(e.target.value)}
                className="email-input"
                required
            />
            </div>
            <div className="email">
                <label htmlFor="email" className="email-label">Email</label>
                <input
                    type="email"
                    id="email"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                    required
                />
            </div>
            <div className="email">
                <label htmlFor="phone" className="email-label">Phone Number</label>
                <input
                    type="phone"
                    id="phone"
                    // onChange={(e) => setPassword(e.target.value)}
                    className="email-input"
                    required
                />
            </div>
            <div className="email">
                <label htmlFor="email" className="email-label">Company Name</label>
                <input
                    type="text"
                    id="companyName"
                    // onChange={(e) => setLastName(e.target.value)}
                    className="email-input"
                    required
                />
            </div>
            <div className="email">
                <label htmlFor="address" className="email-label">Company Address</label>
                <input
                    type="text"
                    id="address"
                    // onChange={(e) => setUserName(e.target.value)}
                    className="email-input"
                    required
                />
            </div>
            <Link to='#' type="submit" className="input-btn">SUBMIT</Link>
        </form>
    </div>
    </section>

    </>
  )
}

export default DistributorForm;