const Form = () =>{
    return <div>
              <div className="text-center"><span className="text-center bg-info text-danger fs-1 border-bottom border-5 rounded-5 px-3 border-warning h1">Contact with Me</span></div>
                     <form action="https://formspree.io/f/meqdypaq" method="POST" className="was-validated px-5">
                            <div className="mb-3 mt-3">
                                <label for="uname" className="form-label text-light">Username:</label>
                                <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </div>
                            <div className="mb-3 mt-3">
                                <label for="email" className="form-label text-light">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter username" name="email" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </div>
                            <div className="mb-3">
                                <label for="pwd" className="form-label text-light">Mobile No:</label>
                                <input type="password" className="form-control" id="mobile" placeholder="Enter mobile" name="mobile" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </div>
                            <div className="mb-3 mt-3">
                                <label for="uname" className="form-label text-light">Your Messages:</label>
                                <textarea name="message" id="message" cols="30" rows="5" className="form-control" required></textarea>
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                            </div>
                        
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                                <label className="form-check-label text-light" for="myCheck">I agree on blabla.</label>
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Check this checkbox to continue.</div>
                            </div>
                            <button type="submit" className="btn btn-success form-control">Send</button>
                         </form>
    </div>
}

export default Form;