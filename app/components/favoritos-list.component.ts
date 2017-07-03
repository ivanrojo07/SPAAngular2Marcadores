// Importar Component desde el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {FavoritoService} from '../services/favorito.service';
import {Favorito} from '../models/favorito'; 


@Component({
	selector: 'favoritos-list',
	templateUrl: 'app/views/favoritos-list.html',
	providers: [FavoritoService]
})

export class FavoritosListComponent implements OnInit{
	public titulo: string;
	public loading: boolean;
	public errorMessage: string;
	public favoritos: Favorito[];
	// public favoritos: Array<string>;
	// public favoritosVisibles: boolean;
	// public color: string;

	constructor(private _favoritoService: FavoritoService){
		this.titulo= 'Listado de marcadores';
		this.loading= true;
		// this.favoritos = ['twitter.com/ivanrojo07', 'facebook.com/ivanrojo07', 'github.com/ivanrojo07', 'youtube.com/ivanrojo07'];
		// this.favoritosVisibles =false;
	}

	// showFavoritos(){
	// 	this.favoritosVisibles = true;
	// }

	// hideFavoritos(){
	// 	this.favoritosVisibles = false;
	// }

	// changeColor(){
	// 	console.log(this.color);
	// }
	ngOnInit(){
		console.log('FavoritoListComponent cargado!!');
		this._favoritoService.getFavoritos().subscribe( 
		result =>{
			console.log(result);
			this.favoritos= result.favoritos;
			this.loading = false;
			if (!this.favoritos) {
				// code...
				alert('Error en el servidor');
			}
		}, 
		error =>{
			this.errorMessage = <any>error;
			if (this.errorMessage != null) {
				// code...
				console.log(this.errorMessage);
				alert('Error en la peticion');
				
			}
		});
	}
}