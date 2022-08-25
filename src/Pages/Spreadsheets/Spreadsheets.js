import React from 'react';
import './Spreadsheets.css'
import {
    RangeDirective, RangesDirective, SheetDirective, SheetsDirective,
    SpreadsheetComponent
} from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './data';


const Spreadsheets = () => {
    return (
        <div className="Spreadsheets-container">
            <SpreadsheetComponent allowOpen={true}
                openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
                allowSave={true}
                saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save">
                <SheetsDirective>
                    <SheetDirective >
                        <RangesDirective >
                            <RangeDirective dataSource={defaultData}></RangeDirective>
                        </RangesDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
        </div>
    );
};

export default Spreadsheets;