import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class TextEditor extends React.Component {
    constructor() {
        super(...arguments);
        this.toolbarSettings = {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
                'Outdent', 'Indent', '|',
                'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
                'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
        };
        this.quickToolbarSettings = {
            image: ['Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-', 'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension'],
            link: ['Open', 'Edit', 'UnLink']
        };
    }
    render() {
        return <div className='mr-4 ml-4'>
            <RichTextEditorComponent height={580} toolbarSettings={this.toolbarSettings} quickToolbarSettings={this.quickToolbarSettings}>
                {/* if you want so you can write some text here */}
                <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
            </RichTextEditorComponent>
        </div>;
    }
}
export default TextEditor;

