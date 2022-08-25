import * as React from 'react';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);


const Docs = () => {
    return (
        <div>
            <DocumentEditorContainerComponent id="container" height={'590px'} serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" enableToolbar={true} />
        </div>
    );
};

export default Docs;