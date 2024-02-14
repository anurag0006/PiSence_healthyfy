import PropTypes from 'prop-types'

const Button = ({text,textColor,bgColor,border,hover}) => {
  return (
    <button className={`p-[15px] pl-[25px] pr-[25px] ${textColor} font-semibold rounded-full ${bgColor} ${border} ${hover}`}>
        {text}
    </button>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor:PropTypes.string ,
    border:PropTypes.string,
    hover:PropTypes.hover
  };

export default Button