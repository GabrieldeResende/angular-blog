import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
  contentTittle: string = 'Algum titulo'
  contentDescription: string = 'Algo'
  private id:string | null = '0'


  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id'))
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id === id)[0]

    this.contentTittle = result.tittle
    this.contentDescription = result.description
    this.photoCover = result.photoCover

  }

}
