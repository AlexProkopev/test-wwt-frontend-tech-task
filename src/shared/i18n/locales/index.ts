export const resources = {
	en: {
		translation: {
			titlePage: 'Selected filters',
			type: 'Type',
			travelQuote: 'Travel not to escape life, but so life doesn’t escape you.',
			filters: {
				MEAL_OPTIONS: 'Meal options',
				RULES_POLICIES_PAYMENT: 'Rules, Policies, and Payment',
				FACILITIES: 'Facilities',
				BED_TYPE: 'Bed type',
				HEALTH_ENTERTAINMENT_SPORTS: 'Health, Entertainment, and Sports',

				// MEAL_OPTIONS options
				breakfast: 'Breakfast included',
				lunch: 'Lunch included',
				dinner: 'Dinner included',
				'all-inclusive': 'All inclusive',

				// RULES_POLICIES_PAYMENT options
				'free-cancellation': 'Free cancellation',
				'pets-allowed': 'Pets allowed',
				'non-smoking-room': 'Non-Smoking room',

				// FACILITIES options
				'private-bathroom': 'Private bathroom',
				'air-conditioning': 'Air conditioning',
				heating: 'Heating',
				'coffee-tea-maker': 'Coffee/Tea maker',
				'shuttle-service': 'Shuttle service',
				'wi-fi': 'Wi-Fi',
				parking: 'Parking',
				pool: 'Pool',

				// BED_TYPE options
				'twin-beds': 'Twin beds',
				'double-bed': 'Double Bed',

				// HEALTH_ENTERTAINMENT_SPORTS options
				gym: 'Gym',
				spa: 'Spa',
				sauna: 'Sauna'
			},
			welcomeMessage: 'Welcome to our app',
			openFilters: 'Open filters',
			filterTitle: 'Filter',
			submitButtonText: 'Apply',
			clearAllParams: 'Clear all parameters',
			useOldFilters: 'Use old filters',
			applyNewFilter: 'Do you want to apply new filter?'
		}
	},
	ru: {
		translation: {
			titlePage: 'Выбранные фильтры',
			type: 'Тип',
			travelQuote:
				'Путешествуйте не для того, чтобы убежать от жизни, а чтобы жизнь не убежала от вас.',
			filters: {
				MEAL_OPTIONS: 'Параметры питания',
				RULES_POLICIES_PAYMENT: 'Правила, условия и оплата',
				FACILITIES: 'Удобства',
				BED_TYPE: 'Тип кровати',
				HEALTH_ENTERTAINMENT_SPORTS: 'Здоровье, развлечения и спорт',

				// MEAL_OPTIONS options
				breakfast: 'Завтрак включен',
				lunch: 'Обед включен',
				dinner: 'Ужин включен',
				'all-inclusive': 'Все включено',

				// RULES_POLICIES_PAYMENT options
				'free-cancellation': 'Бесплатная отмена',
				'pets-allowed': 'Разрешено с животными',
				'non-smoking-room': 'Номер для некурящих',

				// FACILITIES options
				'private-bathroom': 'Собственная ванная',
				'air-conditioning': 'Кондиционер',
				heating: 'Отопление',
				'coffee-tea-maker': 'Кофе/чайник',
				'shuttle-service': 'Трансфер',
				'wi-fi': 'Wi-Fi',
				parking: 'Парковка',
				pool: 'Бассейн',

				// BED_TYPE options
				'twin-beds': 'Две односпальные кровати',
				'double-bed': 'Двуспальная кровать',

				// HEALTH_ENTERTAINMENT_SPORTS options
				gym: 'Тренажёрный зал',
				spa: 'СПА',
				sauna: 'Сауна'
			},
			welcomeMessage: 'Добро пожаловать в наше приложение',
			openFilters: 'Открыть фильтры',
			filterTitle: 'Фильтр',
			submitButtonText: 'Применить',
			clearAllParams: 'Очистить все параметры',
			useOldFilters: 'Использовать старые фильтры',
			applyNewFilter: 'Вы хотите применить новый фильтр?'
		}
	}
} as const
