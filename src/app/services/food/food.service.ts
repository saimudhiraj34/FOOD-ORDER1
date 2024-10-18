import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getFoodById(Id:number):Food{
    return this.getAll().find(food => food.id == Id) ?? new Food();
  }


  // Corrected getAllFoodByTag method
  getAllFoodByTag(tag: string): Food[] {
    return tag == "All"?
    this.getAll() : this.getAll().filter((food) => food.tags?.
    includes(tag));
    
  }

  // getAll method returns the full food list
  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meat Ball',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['India'],
        stars: 4.5,
        imageUrl: '/assets/food-2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id:3,
        name: 'Bugger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['America'],
        stars: 4.5,
        imageUrl: '/assets/food-3.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 4,
        name: 'French fries',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Goa'],
        stars: 4.5,
        imageUrl: '/assets/food-4.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 5,
        name: 'Pastha',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Rajasthan'],
        stars: 4.5,
        imageUrl: '/assets/food-5.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 6,
        name: 'chicken pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Andhra'],
        stars: 4.5,
        imageUrl: '/assets/food-6.jpg',
        tags: ['FastFood', 'Lunch'],
      },
      {
        id: 7,
        name: 'VegBurger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['USA'],
        stars: 4.5,
        imageUrl: '/assets/food-7.jpg',
        tags: ['FastFood', 'Burger', 'Lunch'],
      },
      {
        id: 8,
        name: 'TandooriPizza',
        cookTime: '15-20',
        price: 5,
        favorite: false,
        origins: ['Telangana'],
        stars: 4.2,
        imageUrl: '/assets/food-8.jpg',
        tags: ['FastFood', 'Snack'],
      },
      {
        id: 9,
        name: 'Chicken65',
        cookTime: '5-10',
        price: 7,
        favorite: true,
        origins: ['China'],
        stars: 4.8,
        imageUrl: '/assets/food-9.jpeg',
        tags: ['Healthy', 'Soup'],
      },
      {
        id: 10,
        name: 'Tomato bath',
        cookTime: '15-20',
        price: 8,
        favorite: true,
        origins: ['Uk'],
        stars: 4.6,
        imageUrl: '/assets/food-10.jpeg',
        tags: ['FastFood', 'Burger', 'Lunch'],
      },
      {
        id: 11,
        name: 'Meat',
        cookTime: '10-15',
        price: 9,
        favorite: true,
        origins: ['London'],
        stars: 4.7,
        imageUrl: '/assets/food-11.jpeg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 12,
        name: 'Chicken Wings',
        cookTime: '10-15',
        price: 12,
        favorite: true,
        origins: ['Europe'],
        stars: 4.9,
        imageUrl: '/assets/food-12.jpeg',
        tags: ['FastFood', 'Chicken', 'Dinner'],
      },
    ];
  }
}
