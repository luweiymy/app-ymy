import { Component, OnInit } from '@angular/core';
import { ChartService, ComplaintsWithPercent } from './chart.service';
  
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  providers: [ChartService],
  preserveWhitespaces: true
})
export class ChartComponent implements OnInit {

  dataSource: ComplaintsWithPercent[];
  constructor(service: ChartService) {
    this.dataSource = service.getComplaintsData()
   }
   customizeTooltip = (info: any) => {
      return {
          html: "<div><div class='tooltip-header'>" +
              info.argumentText + "</div>" +
              "<div class='tooltip-body'><div class='series-name'>" +
              info.points[0].seriesName +
              ": </div><div class='value-text'>" +
              info.points[0].valueText +
              "</div><div class='series-name'>" +
              info.points[1].seriesName +
              ": </div><div class='value-text'>" +
              info.points[1].valueText +
              "% </div></div></div>"
      };
    }
    customizeLabelText = (info: any) => {
      return info.valueText + "%";
    }


  ngOnInit() {
  }

}
