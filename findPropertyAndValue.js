/* 
  Author: zikrimansyursyah
  
  Case : anda diminta untuk membuat fungsi yang dapat mengetahui letak file berada dalam struktur yg dibentuk dengan data json

  Example Input: (data pada variabel targetName)

  Expected Output: Nilai File 1-1-2 ditemukan dengan path: Induk > Subfolder 1 > Subfolder 1-1 > File 1-1-2

  Notes: 
  - tampikan expected output dengan console.log()
*/

const data = {
  "name": "Induk",
  "type": "folder",
  "children": [
    {
      "name": "Subfolder 1",
      "type": "folder",
      "children": [
        {
          "name": "File 1-1",
          "type": "file"
        },
        {
          "name": "Subfolder 1-1",
          "type": "folder",
          "children": [
            {
              "name": "File 1-1-1",
              "type": "file"
            },
            {
              "name": "File 1-1-2",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": "File 2",
      "type": "file"
    },
    {
      "name": "Subfolder 2",
      "type": "folder",
      "children": [
        {
          "name": "File 2-1",
          "type": "file"
        },
        {
          "name": "File 2-2",
          "type": "file"
        }
      ]
    }
  ]
}

function findValueWithPath(data, target) {

}

const targetName = "File 1-1-2";

const path = findValueWithPath(data, targetName);
console.log(path)