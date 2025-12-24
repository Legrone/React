import { useNavigate } from 'react-router'


function CartWidget({text, style}) {
  const navigate = useNavigate()
  return (
    <button className={style} onClick={() => navigate('/cart')}>
    {text}
    </button>
  );
}

export default CartWidget;

