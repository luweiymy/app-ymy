import { Component, OnInit } from '@angular/core';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { DisplayDataTestService } from './display-data-test.service';

@Component({
  selector: 'app-display-data-test',
  templateUrl: './display-data-test.component.html',
  styleUrls: ['./display-data-test.component.scss'],
  providers: [DisplayDataTestService]
})
export class DisplayDataTestComponent implements OnInit {


  pivotGridDataSource:any;

  constructor(service: DisplayDataTestService) { 
    this.pivotGridDataSource = {
      fields: [{
        caption: "Region",
        width: 120,
        dataField: "region",
        area: "row",
        sortBySummaryField: "Total"
      }, {
        caption: "City",
        dataField: "city",
        width: 150,
        area: "row"
      }, {
        dataField: "date",
        dataType: "date",
        area: "column"
      }, {
        groupName: "date",
        groupInterval: "month",
        visible: false
      }, {
        caption: "Total",
        dataField: "amount",
        dataType: "number",
        summaryType: "sum",
        format: "currency",
        area: "data"
      }],
      store: service.getSales()
    }
  }
  ngOnInit() {
  }

}
