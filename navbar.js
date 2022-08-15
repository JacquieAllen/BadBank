function NavBar(){
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">BigBadBank</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#" data-toggle="tooltip" data-placement="top">Home <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/CreateAccount/" data-toggle="tooltip" data-placement="bottom">Create Account</a>
                </li>
                <li className="nav-item">
                     <a className="nav-link" href="#/login/" data-toggle="tooltip" data-placement="top" title="Login to start">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/deposit/" data-toggle="tooltip" data-placement="bottom" title="Save that money">Deposit</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/withdraw/" data-toggle="tooltip" data-placement="top" title="Spend those dollas">Withdraw</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/alldata/" data-toggle="tooltip" data-placement="top" title="View the family">AllData</a>
                </li>
            </ul>
        </div>
    </nav>
        
);
}
