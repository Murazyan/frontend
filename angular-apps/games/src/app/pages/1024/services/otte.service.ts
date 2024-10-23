import { Injectable } from '@angular/core';
import { ObjectModel } from '../models/ObjectModel';
import { ModalService } from '../../../services/modal.serevice';
import { ModalComponent } from '../../../components/modal/modal.component';


@Injectable({
  providedIn: 'root'
})
export class OtteService {


  private columnCount = 4;
  private rowCount = 4;

  public objectModel: ObjectModel;

  constructor(private modalService: ModalService) { }

  public initObjectModel() {
    const numbers: number[][] = Array.from(
      {length: this.rowCount}, () => Array(this.columnCount).fill(0));
    const firstPos = this.getRandomPosition();
    numbers[firstPos.row][firstPos.col] = 2;

    let secondPos = this.getRandomPosition();

    while (secondPos.row === firstPos.row && secondPos.col === firstPos.col) {
      secondPos = this.getRandomPosition();
    }
    numbers[secondPos.row][secondPos.col] = 2;

   this.objectModel = new ObjectModel(numbers);
   console.log('initObjectModel', this.objectModel.elements)
  }


  private getRandomPosition (): { row: number, col: number }{
    const row = Math.floor(Math.random() * this.rowCount);
    const col = Math.floor(Math.random() * this.columnCount);
    return { row, col };
  };

  moveRight() {
    this.transpose()
    this.objectModel.elements.forEach(row => {
      row.reverse(); 
    });
    this.pureMoveLeft(); 
    this.objectModel.elements.forEach(row => {
      row.reverse(); 
    });
    this.transpose();
    this.generateNewNumber();
  }

  private pureMoveLeft(){
    this.objectModel.elements.forEach((row )=> {
      let newRow: number[] = [];
      let filteredRow = row.filter(num => num !== 0); 
      for (let i = 0; i <= filteredRow.length-1; i++) {
        console.log('filteredRow[i]', filteredRow[i])
        if (filteredRow[i] === filteredRow[i + 1] && filteredRow[i]!==0) {
          newRow.push(filteredRow[i] * 2); 
          if(filteredRow[i] * 2 === 2048){
            this.modalService.openModal(ModalComponent, {
              title: 'Game over',
              content: 'You win the game'
            });
            this.initObjectModel();
            throw new Error("Game finished");
          }
          filteredRow[i + 1] = 0; 
        }else{
          newRow.push(filteredRow[i]); 
        }
      }

      newRow = newRow.filter(num => num !== 0); 
      while (newRow.length < this.columnCount) {
        newRow.push(0); 
      }
      
      row.splice(0, this.columnCount, ...newRow); 

    });
  }

  moveLeft() {
    this.transpose();
     this.pureMoveLeft();
    this.transpose();
    this.generateNewNumber();
  }

  moveDown() {
    console.log('moveDown')
    this.transpose();
    this.moveRight();
    this.transpose();

  }

  moveUp() {
    console.log('moveUp')
    this.transpose();
    this.moveLeft();
    this.transpose();

  }

  transpose() {
    this.objectModel.elements = this.objectModel.elements[0].map((_, i) =>
      this.objectModel.elements.map(row => row[i])
    );
  }

  private getEmptyCells(): { row: number, col: number }[] {
    const emptyCells: { row: number, col: number }[] = [];
    this.objectModel.elements.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === 0) {
          emptyCells.push({ row: rowIndex, col: colIndex });
        }
      });
    });
    return emptyCells;
  }

  private generateNewNumber() {
    const emptyCells = this.getEmptyCells();
    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const { row, col } = emptyCells[randomIndex];
      this.objectModel.elements[row][col] = 2; 
    }else{
      this.modalService.openModal(ModalComponent, {
        title: 'Game over',
        content: 'You have lost the game'
      });
      this.initObjectModel();
      throw new Error("Game finished");
    }
  }
}
