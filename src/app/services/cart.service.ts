import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/CartItem';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  // BehaviorSubject to hold and emit cart updates
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  // Observable to allow subscription to cart changes
  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  addToCart(food: Food): void {
    // Find the cart item by food id
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }

    // Add new item to the cart
    this.cart.items.push(new CartItem(food));
    this.updateCart();  // Notify subscribers
  }

  removeFromCart(foodId: number): void {
    // Filter out the item from the cart by food id
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
    this.updateCart();  // Notify subscribers
  }

  changeQuantity(foodId: number, quantity: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;

    // If quantity becomes 0 or less, remove the item from the cart
    if (cartItem.quantity <= 0) {
      this.removeFromCart(foodId);
    } else {
      this.updateCart();  // Notify subscribers
    }
  }

  getCart(): Cart {
    return this.cart;
  }

  // Helper method to notify subscribers when the cart changes
  private updateCart(): void {
    this.cartSubject.next(this.cart);  // Emit the new cart state
  }
}
