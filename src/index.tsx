import { JsonEditorProvider } from './provider';
import JsonPicker from './pick';
import JsonReader from './edit';
import type { JsonEditorProps } from './types';


export default function JsonEditorRoot(props: JsonEditorProps) {
    return (
        <JsonEditorProvider editable={props.editable}>
            {props.type === 'pick' && <JsonPicker {...props}/>}
            {props.type !== 'pick' && <JsonReader {...props} />}
        </JsonEditorProvider>
    );
}