import {React,useContext, useEffect ,useState} from 'react'
import './navbaar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/ContextProvider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ToastContainer, toast } from 'react-toastify';
import {useSelector} from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
const Navbaar = () => {
  const {account,setAccount} = useContext(LoginContext);
  //console.log(account);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [text,setText] = useState("");
  console.log(text);
  const [liopen,setLiopen] = useState(true);
  const {products} = useSelector(state => state.getproductsdata);
  const history = useNavigate();
  const getdetailvaliduser = async()=>{
    const res = await fetch("/validuser",{
      method:"GET",
      headers:{
        Accept :"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    });
    const data = await res.json();
    console.log(data);
    if(res.status !== 201){
      console.log("error");
    }else{
      console.log("data valid");
      setAccount(data);
    }
  };

  const logoutuser = async()=>{
    const res2 = await fetch("/logout",{
      method:"GET",
      headers:{
        Accept :"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    });
    const data2 = await res2.json();
    console.log(data2);
    if(res2.status !== 201){
      console.log("error");
    }else{
      console.log("data valid");
      //alert("logout");
      toast.success("valid details",{
        position: "top-center",
      })
      history("/");
      setAccount(false);
      
    }
  };

  const getText = (items)=>{
    setText(items)
    setLiopen(false)
  }
  useEffect(()=>{
    getdetailvaliduser()
  },[])
  return (
    <header>
      <nav>
        <div className='left'>
          <div className='navlogo'>
            <NavLink to='/'><img src='./amazon_logo_navbar.png' height='50px' width='100px' alt=''/></NavLink>
          </div>
          <div className='nav_searchbaar'>
            <input type='text'name='' onChange={(e)=>getText(e.target.value)} placeholder='search your products'  id=''/>
            <div className='search_icon'>
              <SearchIcon id='search'/>
            </div>
            {
              text &&
              <List className='extrasearch' hidden={liopen}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                    <ListItem>
                      <NavLink to={`/getproductsone/${product.id}`} onClick={()=> setLiopen(true)}>
                      {product.title.longTitle}
                      </NavLink>
                    </ListItem>
                  ))
                }
              </List>
            }
          </div>
        </div>
        <div className='right'>
          <div className='navbtn'>
            <NavLink to='/login'>signin</NavLink>
          </div>
          <div className='cart_btn'>
            {
                account ? <NavLink to="/buynow">
                <Badge badgeContent={account?.carts?.length || 0} color="primary">
                <ShoppingCartIcon id='icon'/>
                </Badge>
                </NavLink> :<NavLink to="/login">
                <Badge badgeContent={0} color="primary">
                <ShoppingCartIcon id='icon'/>
                </Badge>
                </NavLink>
            }
            <ToastContainer/>
            <p>Cart</p>
          </div>
          {
            account ? <Avatar className='avtar2' id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>{account.fname[0].toUpperCase()}</Avatar>:
            <Avatar className='avtar' id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}></Avatar>
          }
            
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        {
            account ?  <MenuItem onClick={logoutuser}>Logout</MenuItem>:
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            
        }
        
      </Menu>
        </div>
      </nav>
    </header>
  )
}

export default Navbaar
