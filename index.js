
function Spa(){
    return(
        
        <HashRouter>
        
            <NavBar/>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/alldata/" component={AllData} />
            
        </HashRouter>
    
    )
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)
