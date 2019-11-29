import {Component, OnInit} from '@angular/core';
import {MealBasketService} from '../../services/meal-basket.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ConversionsUtil} from '../../utils/conversions.util';
import {UNIT} from "../../../../../shared_code/shared-enums";
import {PersonalMeal} from '../../models/meal';

@Component({
	selector: 'app-basket',
	templateUrl: './basket.component.html',
	styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
	basket: PersonalMeal[];
	UNIT = UNIT;

	constructor(
		private basketService: MealBasketService,
		private conversions: ConversionsUtil) {
	}

	ngOnInit() {
		this.basket = this.basketService.getBasket();
	}

	removeItemFromBasket(item: PersonalMeal) {
		this.basketService.removeItemFromBasket(item);
	}
}
