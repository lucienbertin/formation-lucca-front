import { Component, OnInit, ElementRef, Input, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

import { LuPopoverComponent, luTransformPopover } from '@lucca-front/ng';

@Component({
	selector: 'cc-user-popover',
	templateUrl: './user-popover.component.html',
	styleUrls: [],
	animations: [luTransformPopover],
	exportAs: 'ccUserPopover'
})
export class UserPopoverComponent extends LuPopoverComponent implements OnInit, OnDestroy {
	@Input() user;

	constructor(private elementRef: ElementRef) {
		super(elementRef);
		this.alignment = 'top';
		this.position = 'after';
		this.targetOffsetX = -84; // seems not used?
		this.triggerEvent = 'hover';
		this.overlapTrigger = true;
	}

	ngOnInit(): void {
	}
	ngOnDestroy(): void {
	}


}
