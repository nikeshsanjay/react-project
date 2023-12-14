import '../assest/styles/nav.css'
import logo from './me.png'
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'

function Login()
{
    return(
        <div className='navstyle' style={{
            marginLeft: '1000px',
            marginTop: '100px',
            
            color: 'white',
            padding: '100px',
            width: '200px',
            borderRadius: '30px'
        }}>
            <h3><b>Login</b></h3>
            <form>
                <label>Username🥷:
                    <input type="text" />
                </label><br></br>
                <label>Password🔑:
                    <input type="password" />
                </label>
            </form>
            <p>don't have an account?SignUp</p>
            <button>Sign In</button>
        </div>
    )
}
function Home()
{
    return(
        <div >

        </div>
    )
}
function  Register()
{
    return(
        <div className='opac'style={{
            marginLeft: '800px',
            marginTop: '100px',
            
            color: 'white',
            padding: '100px',
            width: '300px',
            borderRadius: '30px'}}>
             <h3>Sign Up</h3>
            <form>
                <label>FirstName:
                    <input type="text" />
                </label>
                <label>LastName:
                    <input type="text" />
                </label>
                <br></br>
                <br></br>
                <label>PhoneNo☎️:
                    <input type="text" />
                </label>
            </form><br></br>
            <button>SignUp</button>
        </div>
    )
}
function Navbar()
{
    return (
        <header>
        <Router>

            <nav className='nav'>
                <h1>
                   &nbsp;&nbsp;&nbsp; <img  src={logo} className='boom'/>
                </h1>
                <ul>
                    <li ><Link to='/' className='links'>HOME</Link></li>
                    <li ><Link to='/login' className='link'>LOGIN</Link></li>
                    <li ><Link to='/register'className='link'>REGISTER</Link></li>

                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/register' element={<Register/>} />
            </Routes>
        </Router>
        </header>
    )
}
export default Navbar;