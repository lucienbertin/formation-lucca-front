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

	fields = [
		{
			key: 'name',
			type: 'input',
			templateOptions: {
				type: 'text',
				label: 'nom',
				mod: 'mod-framed',
			},
		},
		{
			key: 'email',
			type: 'input',
			templateOptions: {
				type: 'email',
				label: 'contact',
				mod: 'mod-framed',
			},
		},
		{
			key: 'password',
			type: 'input',
			templateOptions: {
				type: 'password',
				label: 'password',
				mod: 'mod-framed',
			},
		},
		{
			key: 'startDate',
			type: 'date',
			templateOptions: {
				label: 'Date de debut',
				mod: 'mod-framed',
			},
		},
		{
			key: 'notabene',
			type: 'textarea',
			templateOptions: {
				label: 'remaqrwues en tout genre',
				mod: 'mod-framed',
			},
		},
		{
			key: 'type',
			type: 'select',
			templateOptions: {
				label: 'type de contrat',
				options: [
					{ id: 0, name: 'direct' },
					{ id: 1, name: 'indirect' },
				],
				mod: 'mod-framed',
			},
		},
	];
	submit(client) {
		this.clientSubmitted.emit(client);
	}
}
