import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


function CartWidget({ styles }) {
  const navigate = useNavigate()
  const { getQuantity } = useContext(CartContext)
  const total = getQuantity()

  return (
    <button className={styles} onClick={() => navigate('/cart')}>
    Cart {total}
    </button>
  );
}

export default CartWidget;

