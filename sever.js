const xl = require("excel4node");
const wb = new xl.Workbook();
const ws = wb.addWorksheet('nome da planilha');

const data = [
    {
        "nome" : "teste",
        "email" : "pessoa@gmail.com",
        "cellphone": "123456789"
    },
    {
        "nome" : "teste",
        "email" : "pessoa@gmail.com",
        "cellphone": "123456789"  
    }
];

const headingColumnNames= [
    "Nome",
    "E-mail",
    "Celular"
];

let headingColumnIndex = 1;
headingColumnNames.forEach(heading => {
    ws.cell (1, headingColumnIndex ++).string(heading);

});

let rowIndex =2;
data.forEach(record =>{
    let columnIndex = 1;
    Object.keys(record).forEach(columnName=>{
        ws.cell(rowIndex, columnIndex ++).string(record[columnName])
    });
    rowIndex++;
});

wb.write('arquivo.xlsx');