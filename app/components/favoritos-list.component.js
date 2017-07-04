"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Importar Component desde el núcleo de Angular
var core_1 = require('@angular/core');
var favorito_service_1 = require('../services/favorito.service');
var FavoritosListComponent = (function () {
    // public favoritos: Array<string>;
    // public favoritosVisibles: boolean;
    // public color: string;
    function FavoritosListComponent(_favoritoService) {
        this._favoritoService = _favoritoService;
        this.titulo = 'Listado de marcadores';
        this.loading = true;
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
    FavoritosListComponent.prototype.ngOnInit = function () {
        console.log('FavoritoListComponent cargado!!');
        this.getFavoritos();
    };
    FavoritosListComponent.prototype.getFavoritos = function () {
        var _this = this;
        this._favoritoService.getFavoritos().subscribe(function (result) {
            console.log(result);
            _this.favoritos = result.favoritos;
            _this.loading = false;
            if (!_this.favoritos) {
                // code...
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                // code...
                console.log(_this.errorMessage);
                alert('Error en la peticion');
            }
        });
    };
    FavoritosListComponent.prototype.onBorrarConfirm = function (id) {
        this.confirmado = id;
    };
    FavoritosListComponent.prototype.onCancelarConfirm = function (id) {
        this.confirmado = null;
    };
    FavoritosListComponent.prototype.onBorrarFavorito = function (id) {
        var _this = this;
        this._favoritoService.deleteFavorito(id).subscribe(function (response) {
            //console.log(response.delete);
            if (!response.delete) {
                alert('Error en el servidor');
            }
            _this.getFavoritos();
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert('Error');
            }
        });
    };
    FavoritosListComponent = __decorate([
        core_1.Component({
            selector: 'favoritos-list',
            templateUrl: 'app/views/favoritos-list.html',
            providers: [favorito_service_1.FavoritoService]
        }), 
        __metadata('design:paramtypes', [favorito_service_1.FavoritoService])
    ], FavoritosListComponent);
    return FavoritosListComponent;
}());
exports.FavoritosListComponent = FavoritosListComponent;
//# sourceMappingURL=favoritos-list.component.js.map