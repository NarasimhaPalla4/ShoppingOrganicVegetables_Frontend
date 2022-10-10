import './button.css';

const Button = (props) => {



    return (

        <button className='button-object'>

            {props.text}

        </button>

    )

}



export default Button;