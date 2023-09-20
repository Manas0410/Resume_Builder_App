import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "./slice";


const Test = () => {
  const val = useSelector((state) => state.cartReducer.value);
    const dispatch = useDispatch()
  return (
      <div>{val}
          <button onClick={()=>{dispatch(incrementByAmount(5))}}>inc</button>
    </div>
  )
}

export default Test




// getter to get the val from redux store => useselector
// setter to dispatch the val to update counter => usedispatch