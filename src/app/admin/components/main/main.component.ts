import { Component, OnInit, ViewChild } from '@angular/core';
import { TagInterface } from 'src/app/core/interfaces/tag.interface';
import { TagService } from 'src/app/core/services/tag.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public displayedTag: MatTableDataSource<TagInterface>;
  public tags: TagInterface[];
  public column: string[] = ['name', 'followers'];
  public tagList: TagInterface[];

  constructor(
    private tagService: TagService
  ) {
    this.tags = [];
  }

  ngOnInit() {
    // On récupère les tags
    this.tagService.get().subscribe((response:any[]) => {
      //variables
      let ListTag = [];
      let order = 0;

      // création du table qui containt les données
      response.forEach(tag => {

        ListTag.push({
          id: tag.id,
          name: tag.name,
          followers: tag.iteration,
          isPair: order%2 == 0, //pour afficher
        });

        order++;
      });
      
      this.displayedTag = new MatTableDataSource(ListTag);
      this.displayedTag.paginator = this.paginator;
      
      this.tagList = ListTag;
  });

}
  public async find(event: any) {
    //variables
    const input = event.target.value;
    const ListTag = [];
    
    this.tagList.forEach(tag => {
      // condition pour récupérer les tags
      if (tag.name.includes(input)) {
        ListTag.push(tag);
      }

    });
    // affectation au tableau qui sera affiché
    this.displayedTag.data = ListTag;

  }

}