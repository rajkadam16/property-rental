import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input("data") tabDataList: any; 
  onTabHover(event: Event) {
    const button = event.target as HTMLButtonElement;
    button.style.backgroundColor = '#495057'; // Lighter shade
    button.style.transform = 'scale(1.05)'; // Slight zoom effect
}

onTabLeave(event: Event) {
    const button = event.target as HTMLButtonElement;
    button.style.backgroundColor = ''; // Reverts to default
    button.style.transform = 'scale(1)'; // Reset scale
}

}
