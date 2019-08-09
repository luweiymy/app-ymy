import { Component, OnInit } from '@angular/core';
import { SchedulerService, Employee} from './scheduler.service';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
  providers: [SchedulerService]
})
export class SchedulerComponent implements OnInit {

  dataSource: any;
  currentDate: Date = new Date(2016, 7, 2, 11, 30);
  resourcesDataSource: Employee[];

  constructor(service: SchedulerService) {
    this.dataSource = new DataSource({
      store: service.getData()
    });

    this.resourcesDataSource = service.getEmployees();
  }
  markWeekEnd(cellData) {
    function isWeekEnd(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    }
    var classObject = {};
    classObject["employee-" + cellData.groups.employeeID] = true;
    classObject['employee-weekend-' + cellData.groups.employeeID] = isWeekEnd(cellData.startDate)
    return classObject;
  }
  markTraining(cellData) {
    var classObject = {
        "day-cell": true
    }

    classObject[SchedulerComponent.getCurrentTraining(cellData.startDate.getDate(), cellData.groups.employeeID)] = true;
    return classObject;
  }

  static getCurrentTraining(date, employeeID) {
    var result = (date + employeeID) % 3,
        currentTraining = "training-background-" + result;

    return currentTraining;
  }


  ngOnInit() {
  }

}
