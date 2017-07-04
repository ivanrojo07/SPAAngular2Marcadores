import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {Favorito} from '../models/favorito';
import {FavoritoService} from '../services/favorito.service';


@Component({
	selector: 'favorito-add',
	templateUrl: 'app/views/favorito-add.html',
	providers: [FavoritoService]
})

export class FavoritoAddComponent implements OnInit{
	
	public errorMessage: string;
	public favorito: Favorito;
	public tituloVista: string;
	constructor(private _favoritoService: FavoritoService, 
		private _route: ActivatedRoute, 
		private _router: Router){
		this.tituloVista="Crear Marcador";
	}

	ngOnInit(){
		this.favorito = new Favorito("","","","");
		console.log(this.favorito);
	}
	public onSubmit(){
		console.log(this.favorito);
		this._favoritoService.addFavorito(this.favorito).subscribe(
			result=>{
				if (!result.favorito) {
					// code...
					alert('Error en el servidor')
				}else{
					this.favorito = result.favorito;
					this._router.navigate(['/marcador', this.favorito._id]);
				}
			},
			error=>{
			this.errorMessage = <any>error;
			if (this.errorMessage != null) {
				// code...
				console.log(this.errorMessage);
				alert('Error en la peticion');
			}
		});
	}
}
