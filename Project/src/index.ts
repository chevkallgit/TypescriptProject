import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';

type Data = {
    name: string;
    lat: number;
    lng: number;
    population: number;
}

(() => {
    const csvFilePath = path.resolve(__dirname, 'C:/Users/chevk/VScodeprojects/Project/stats.csv');
  
    const headers = ['name', 'lat', 'lng', 'population'];
  
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
  
    parse(fileContent, {
      delimiter: ',',
      columns: headers,
    }, (error, result: Data[]) => {
      if (error) {
        console.error(error);
      }
  
      console.log("Result", result);
    });
  })();