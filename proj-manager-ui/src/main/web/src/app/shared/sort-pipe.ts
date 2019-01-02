import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortFilter',
  pure: false
})
export class SortFilterPipe implements PipeTransform {

    transform(items: any, key: string): any {

        if (key === undefined || key == '' || !items) {
            return items;
        }

        var arr = key.split("-");
        var keyString = arr[0];
        var sortOrder = arr[1];
        var byVal = 1;

        items.sort((a: any, b: any) => {

            if (a[keyString] < b[keyString]) {
                return (sortOrder === "asc") ? -1 * byVal : 1 * byVal;
            } else if (a[keyString] > b[keyString]) {
                return (sortOrder === "asc") ? 1 * byVal : -1 * byVal;
            } else {
                return 0;
            }

        });
        return items;
    }
}