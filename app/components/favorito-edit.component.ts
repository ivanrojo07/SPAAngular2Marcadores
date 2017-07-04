import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {Favorito} from '../models/favorito';
import {FavoritoService} from '../services/favorito.service';

@Component({

	selector: 'favorito-edit',
	templateUrl: 'app/views/favorito-add.html',
	providers: [FavoritoService]
})

export class FavoritoEditComponent implements OnInit{
	
	public tituloVista: string;
	public errorMessage: string;
	public favorito: Favorito;

	constructor(private _favoritoService: FavoritoService,
		private _route: ActivatedRoute,
		private _router: Router){

		this.tituloVista= "Editar marcador";
	}
	ngOnInit(){
		this.favorito = new Favorito("","","","");
		this.getFavorito();
	}

	getFavorito(){
		console.log('FavoritoAddComponent cargado!!');
		this._route.params.forEach((params: Params)=>{
			let id = params['id'];

			this._favoritoService.getFavorito(id).subscribe(
				result=>{
					this.favorito = result.favorito;
					console.log(this.favorito);
					if (!this.favorito) {
						// code...
						this._router.navigate(['/']);
					}
				},
				error=>{
					this.errorMessage = <any>error;
					if(this.errorMessage != null){
						console.log(this.errorMessage);
						alert('Error en la peticion');
					}
				}
				);
		});
	}
	public onSubmit(){
	console.log(this.favorito);
	this._route.params.forEach((params: Params)=>{
	this._favoritoService.editFavorito(this.favorito).subscribe(
		response=>{
			if(!response){
				alert('Error en el servidor')
			}
			else{
				this._router.navigate(['/marcador', this.favorito._id]);
			}
			
		},
		error=>{
			this.errorMessage=<any>error;
			if (this.errorMessage !=null) {
				// code...
				console.log(this.errorMessage);
				alert('Error en la peticion');
			}
		});
		});
	}
}
