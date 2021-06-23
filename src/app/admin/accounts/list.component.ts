import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';
import { Account } from '@app/_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    lstaccounts: Account[];

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(accounts => this.lstaccounts = accounts.data);
    }

    deleteAccount(id: string) {
        const account = this.lstaccounts.find(x => x.id === id);
        //account.dele = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.lstaccounts = this.lstaccounts.filter(x => x.id !== id) 
            });
    }
}