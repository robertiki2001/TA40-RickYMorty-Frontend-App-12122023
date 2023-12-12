import { Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CharacterCardComponent],
  imports: [CommonModule],
  exports: [CharacterCardComponent],
})

export class CharacterCardComponent implements OnInit {

  @Input() character: any;

  constructor() { }

  ngOnInit(): void {
  }

}