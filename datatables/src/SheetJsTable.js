import React, {Component}  from 'react';
import XLSX from 'xlsx';
import saveAs from 'file-saver';

class SheetJsTable extends Component{

    setNewBook(){
        const wb = XLSX.utils.book_new();
        wb.Props = {
            Title:'sheetjs',
            Subject:'test file',
            Author:'jh',
            CreateDate: new Date()
        };
        wb.SheetNames.push('Test sheeeeeet');
        const ws_data = [['hello','world']];
        const ws = XLSX.utils.aoa_to_sheet(ws_data);
        wb.Sheets["zero"] = ws;
        return wb;
    }

    writeBook(){
        return XLSX.write(this.setNewBook(), {bookType:'xlsx', type:'binary'});
    }

    s2ab(s){
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for(var i = 0; i<s.length; i++){
            view[i] = s.charCodeAt(i) & 0xFF;
        }
        return buf;
    }
    handleClick(){
        saveAs(new Blob([this.s2ab(this.writeBook())],{
            type:"application/octet-stream"
        }), 'test.xlsx')
    }
    render() {
        return (
            <div>
                <h1>SheetJs</h1>
                <button onClick={this.handleClick}>excel</button>
            </div>
        )
    }
}

export default SheetJsTable;