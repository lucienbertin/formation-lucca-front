import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'cc-form',
	templateUrl: './create-form.component.html',
	styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {
	form: FormGroup = new FormGroup({});
	client = {};
	@Output() clientSubmitted = new EventEmitter();
	submit(client) {
		this.clientSubmitted.emit(client);
	}
	fields = [
		{
			key: 'name',
			type: 'input',
			templateOptions: {
				type: 'text',
				label: 'name - text',
			},
		},
		// {
		// 	key: 'email',
		// 	type: 'input',
		// 	templateOptions: {
		// 		type: 'email',
		// 		label: 'email - email',
		// 	},
		// },
		// {
		// 	key: 'password',
		// 	type: 'input',
		// 	templateOptions: {
		// 		type: 'password',
		// 		label: 'password - password',
		// 	},
		// },
		// {
		// 	key: 'age',
		// 	type: 'input',
		// 	templateOptions: {
		// 		type: 'number',
		// 		label: 'age - number',
		// 	},
		// },
		// {
		// 	key: 'birthDate',
		// 	type: 'date',
		// 	templateOptions: {
		// 		label: 'birthDate - date',
		// 	},
		// },
		// {
		// 	key: 'description',
		// 	type: 'textarea',
		// 	templateOptions: {
		// 		label: 'description - textarea',
		// 		placeholder: 'enter your life journey',
		// 	},
		// },
		// {
		// 	key: 'gender',
		// 	type: 'autocomplete',
		// 	templateOptions: {
		// 		label: 'gender - autocomplete',
		// 		placeholder: 'choose well',
		// 		options: [
		// 			{ id: 0, name: 'female' },
		// 			{ id: 1, name: 'male' },
		// 			{ id: 2, name: 'other' },
		// 		],
		// 	},
		// },
		// {
		// 	key: 'orientation',
		// 	type: 'select',
		// 	templateOptions: {
		// 		label: 'sexual orientation - select',
		// 		placeholder: 'choose well',
		// 		options: [
		// 			{ id: 0, name: 'female' },
		// 			{ id: 1, name: 'male' },
		// 			{ id: 2, name: 'other' },
		// 		],
		// 	},
		// },
		// {
		// 	key: 'manager',
		// 	type: 'user',
		// 	templateOptions: {
		// 		label: 'manager - user',
		// 		placeholder: 'pings /api/v3/users/find',
		// 	},
		// },
		// // {
		// // 	key: 'department',
		// // 	type: 'api',
		// // 	templateOptions: {
		// // 		label: 'department - api',
		// // 		placeholder: 'pings /api/v3/departments',
		// // 		api: '/api/v3/departments',
		// // 	},
		// // },
	];
}
