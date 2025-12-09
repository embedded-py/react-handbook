import './Nav.css'

const nav = () => {
    return (
        <>
            <nav className='nav-test'>
                <div>
                    <h1>React Handbook</h1>
                </div>                
            </nav>
            <ul>
              <div className='ul-container'>
                <a href='/'><li className='ul-header'>Home</li></a>
                <a href='/cadastro'><li className='ul-header'>Cadastro</li></a>
                <a href='/dashboard'><li className='ul-header'>Dashboard</li></a>    
              </div>                
            </ul>
        </>
    )
} 

export default nav