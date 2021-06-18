const Form = () => {
    return (
        <form>
            <div className="mb-5">
                <label className="form-label" htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email"
                       placeholder="Your email address" />
            </div>
            <div className="mb-5">
                <label className="form-label" htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password"
                       autoComplete="current-password" />
            </div>
            <div className="mb-5">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="check_example"
                           id="check_example" />
                    <label className="form-check-label" htmlFor="check_example">
                        Keep me logged in
                    </label>
                </div>
            </div>
            <div>
                <a href="#" className="btn btn-primary w-full">
                    Sign in
                </a>
            </div>
        </form>
    )
}

export default Form;