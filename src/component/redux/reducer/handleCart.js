const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      //   check if product is Already Exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // increase the Quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      // اذا كان المنتج واحد فقط نرجع فقط ال
      //  كلها باستثناء هذا المنتج!STATE
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        //  اذا كان اكثر من منتج يعيد
        //   مع عدد هذا المنتج-1STATEكل
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;

      break;
  }
};
export default handleCart;
