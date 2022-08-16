function Withdraw(){
    const ctx = React.useContext(UserContext);
    let inUser = ctx.loggedIn[0];
    const [update, setUpdate] = React.useState('false');
    const [value, setValue] = React.useState('');
    const [show, setShow] = React.useState(true);

    const handleTextChange = (event) => {
        setValue(event.target.value);
    }

    function handleWithdraw(){
        let balance = document.getElementById('balance').value;
        if (balance > 0 && inUser.user.balance >= balance && !isNaN(balance)) {
            inUser.user.balance -= Number(balance);
            setUpdate(true);
            setShow(false);
        }
        else{
            alert('Transaction Declined');
        }
    }

    return (
        <Card
        txtcolor="black"
        header="Withdraw that cash!"
        body= {show? (inUser ? (
            <>

            <h2>{update ? "Balance: " + inUser.user.balance : "Balance: "+ inUser.user.balance}</h2>
            <h3>Withdraw This Amount</h3>
            <input type="number" width="300" id="balance" onChange={handleTextChange} value={value}></input>
            <button type="submit" disabled={ value ?false:true} className="btn btn-primary" onClick={handleWithdraw}>Withdraw it now!</button>

            </>
        ): ("")) : ("Accepted! Your Withdraw: $" + inUser.user.balance)}
       />
    )
        }
