import classes from './Header.module.css'

const Header = () =>{
    return(
        <div className={classes.header}>
            <div className={classes.logo}>
                {/* <a className={classes.icon}></a> */}
                <h3 className={classes.title}> Advices</h3>
            </div>
            <a href="https://github.com/skhulbe75/advice-app-react.git" target="_blank" className={classes["show-code"]} rel="noreferrer">Show me the code</a>
        </div>
    )
};

export default Header;