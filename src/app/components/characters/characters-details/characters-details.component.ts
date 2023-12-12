import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../../services/characters.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.css']
})
export class CharactersDetailsComponent implements OnInit {

  id: any;
  character: any;

  constructor(private charactersService: CharactersService, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');

    this.charactersService.getCharacterId(this.id).subscribe({
      next: (result) => {
        this.character = result;
      },
      error: (error) => {
        console.log("Problemas", error);
      }
    });
    
  }

}