import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-container-blank',
  templateUrl: './layout-container-blank.component.html',
  styleUrls: ['./layout-container-blank.component.scss']
})
export class LayoutContainerBlankComponent implements OnInit {
  isScreenSmall = false;
  showMenu=true;
  constructor() { }

  ngOnInit(): void {
  }

}
