import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	readonly title = 'My Angular Learning App';
	readonly faviconSrc = '../../../favicon.ico';

	onMenuClick() {
		console.log('Menu click');
	}
	onShareClick(event: Event) {
		event.stopPropagation();
		console.log('onShareClick');
	}
}
