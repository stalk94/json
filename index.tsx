import React, { useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import Json from './src';
import './style/tailwind.css';


function App() {
    const [pick, setPick] = React.useState('root/age');
    const [data, setData] = React.useState({
        name: "Alex",
        age: 25,
        skills: ["JS", "React"],
        perk: {
            fire: { enable: true, value: 10 },
            shot: { enable: true, value: [10, 10] }
        },
        active: true
    });


    const handleRename = useCallback((oldKey: string, newKey: string) => {
        if (!newKey || oldKey === newKey) return;

        setData((prev) => {
            const { [oldKey]: value, ...rest } = prev;
            return { ...rest, [newKey]: value };
        });
    }, [data]);


    return (
        <div className='w-50 ml-3 mt-3'>
            <Json
                editable={true}
                value={data}
                onChange={setData}
                onRename={handleRename}
                type='edit'
            />
            <Json
                editable={false}
                value={data}
                pickedPath={pick}
                onPick={setPick}
                defaultCollapsed={false}
                type='pick'
            />
        </div>
    );
}


const container = document.querySelector('.root');
const root = createRoot(container);
root.render(<App />);
