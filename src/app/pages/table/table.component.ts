import {DataSource} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {BehaviorSubject, Observable, debounceTime} from 'rxjs';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ElementsDataSource } from './data-source';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Basic CDK data-table
 */
@Component({
  selector: 'cdk-table-basic-example',
  templateUrl: './table.component.html',
  standalone: true,
  imports: [CdkTableModule , NavbarComponent, CommonModule, ReactiveFormsModule],
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = new ElementsDataSource();
  total : number = 0
  input = new FormControl('', {nonNullable: true})

  ngOnInit(){
    this.dataSource.init(ELEMENT_DATA)
    this.total = this.dataSource.getTotal()

    this.input.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((query)=>{
      this.dataSource.find(query)
    })
  }

  update(element: PeriodicElement){
    this.dataSource.update(element.position, {weight: 7})
    this.total = this.dataSource.getTotal()
  }
}
