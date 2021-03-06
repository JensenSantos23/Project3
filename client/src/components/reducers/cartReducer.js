import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import Item7 from '../../images/item7.jpg'
import Item8 from '../../images/item8.jpg'
import Item9 from '../../images/item9.jpg'
import Item10 from '../../images/item10.jpg'
import Item11 from '../../images/item11.jpg'
import Item12 from '../../images/item12.jpg'
import Item13 from '../../images/item13.jpg'
import Item14 from '../../images/item14.jpg'
import Item15 from '../../images/item15.jpg'
import Item16 from '../../images/item16.jpg'
import Item17 from '../../images/item17.jpg'
import Item18 from '../../images/item18.jpg'
import Item19 from '../../images/item19.jpg'
import Item20 from '../../images/item20.jpg'
import Item21 from '../../images/item21.jpg'
import Item22 from '../../images/item22.jpg'
import Item23 from '../../images/item23.jpg'
import Item24 from '../../images/item24.jpg'

import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        { id: 1, title: '', desc: "Men's, Addidas Yeezy Boost 350 V2 Gray, Running Shoes", price: 225.99, img: Item1 },
        { id: 2, title: '', desc: "Men's, Air Jordan 11 Retro Gamma Blue, Basketball Shoes", price: 249.99, img: Item2 },
        { id: 3, title: '', desc: "Mens, Nike Lebron James 12, Basketball Shoes", price: 134.99, img: Item3 },
        { id: 4, title: '', desc: "Men's, Nike Kobe Bryant Last Game, BasketBall Shoes", price: 199.99, img: Item4 },
        { id: 5, title: '', desc: "Vintage 1950s Rockabilly Polka Dots Audrey Dress Retro Cocktail Dress", price: 35.99, img: Item5 },
        { id: 6, title: '', desc: "Ever-Pretty Womens Cap Sleeve Lace Neckline Ruched Bust Evening Gown ", price: 158.99, img: Item6 },
        { id: 7, title: '', desc: "Women’s Elegant Cocktail Maxi Dress Deep V Neck 3/4 Sleeve Vintage ", price: 43.99, img: Item7 },
        { id: 8, title: '', desc: "Women's Sleeveless Floral Lace Slim Evening Cocktail Mini Dress for Party ", price: 36.99, img: Item8 },
        { id: 9, title: '', desc: "Men's V Neck Sweater ", price: 34.99, img: Item9 },
        { id: 10, title: '', desc: "Men's Alderglen Flannel-Lined Chino Pants ", price: 35.99, img: Item10 },
        { id: 11, title: '', desc: " Women's High Waist Fold Over Pocket Shirring Skirt ", price: 32.99, img: Item11 },
        { id: 12, title: '', desc: "A-Line Pleated Vintage Skirts for Women ", price: 26.99, img: Item12 },
        { id: 13, title: '', desc: "Women's Supersoft Terry Dolman-Sleeve V-Neck Tunic ", price: 37.99, img: Item13 },
        { id: 14, title: '', desc: "Women's Jersey Long-Sleeve Scoop Neck Tunic ", price: 19.99, img: Item14 },
        { id: 15, title: '', desc: "Men's Suites 3 Pieces (Jacket+Vest+Pant) ", price: 124.99, img: Item15 },
        { id: 16, title: '', desc: "Men's Casual Shirts ", price: 34.99, img: Item16 },
        { id: 17, title: '', desc: "Levi Strauss & Co. Men's Jean ", price: 69.99, img: Item17 },
        { id: 18, title: '', desc: "Levi Strauss & Co. Men's Trucker Jacket ", price: 59.99, img: Item18 },
        { id: 19, title: '', desc: "Men's Casual Leather Wallets ", price: 35.99, img: Item19 },
        { id: 20, title: '', desc: "Men's Casual Shirts ", price: 24.99, img: Item20 },
        { id: 21, title: '', desc: "Women's Sheer Chiffon Blouse Loose Tops Kimono Floral Print Cardigan ", price: 16.99, img: Item21 },
        { id: 22, title: '', desc: "Women's Long Open Front Drape Lightweight Duster High Low Hem Maxi Long Sleeve Cardigan ", price: 27.99, img: Item22 },
        { id: 23, title: '', desc: "Men's Dress Shoes ", price: 129.99, img: Item23 },
        { id: 24, title: '', desc: "Men's T-Shirt Full Stack Developer ", price: 24.99, img: Item24 }
        
    
    
    
    ],
    addedItems: [],
    total: 0
    

}

const cartReducer = (state = initState, action) => {

    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 6
        }
    }

    if (action.type === 'SUB_SHIPPING') {
        return {
            ...state,
            total: state.total - 6
        }
    }
    

    return state
}

export default cartReducer