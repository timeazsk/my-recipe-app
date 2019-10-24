import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy{
    
    private userSub: Subscription;
    isAuthenticated = false;
    constructor(private dataStorage : DataStorageService, private authService: AuthService){}

    ngOnInit(){
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
        });
    }
    onSaveData(){
        this.dataStorage.storeRecipes();
    }
    
    onFetchData(){
        this.dataStorage.fetchRecipes().subscribe();
    }

    ngOnDestroy(){
        this.userSub.unsubscribe();
    }

  
}