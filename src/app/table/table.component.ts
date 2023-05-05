import { Component, OnInit } from '@angular/core';
import { TableService } from '../services/table.service';
import { Recipe } from '../models/Recipe';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { UpdateComponent } from './update/update.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  recipes:Recipe[]=[];
  constructor(private recipeservice:TableService,private dialog:MatDialog){}

  ngOnInit(): void {
    this.recipes=this.recipeservice.getAllRecipes();
  }
  
  updateRecipe(recipe:Recipe){
    const dialogRef=this.dialog.open(UpdateComponent,{data:recipe});
    this.recipes=[...this.recipes];
  }

}
