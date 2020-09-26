import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class OlympicService {

  public static GET_LIST = 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json';

  constructor(private httpClient: HttpClient) {
  }

  getList(): any{
    return this.httpClient.get(OlympicService.GET_LIST);
  }
}
