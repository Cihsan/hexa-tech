import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import CanvasDraw from 'react-canvas-draw';


const Paint = () => {
    const componentRef = useRef();
    const firstCanvas = useRef(null);
    const secondCanvas = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const handleClick = () => {
        const data = firstCanvas.current.getSaveData();
        console.log(data);
        secondCanvas.current.loadSaveData(data)
    }

    const clear = () => {
        firstCanvas.current.clear();
    }

    const undo = () => {
        firstCanvas.current.undo();
    }
    return (
        <div>

            <button onClick={handleClick}
                className="btn hover:bg-primary rounded bg-purple-600 text-white font-bold hover:bg-none ml-2">Save Drawing</button>

            <button onClick={undo}
                className="btn hover:bg-primary rounded bg-purple-600 text-white font-bold hover:bg-none ml-2"
            >Undo</button>
            <button onClick={clear}
                className="btn hover:bg-primary rounded bg-purple-600 text-white font-bold hover:bg-none ml-2"
            >Clear</button>
            <button
                onClick={handlePrint}
                className="btn hover:bg-primary rounded bg-purple-600 text-white font-bold hover:bg-none ml-2">Print</button>

            <div>
                <CanvasDraw
                    style={{ width: "100%", border: "1px solid blue" }}
                    brushRadius={1}
                    brushColor="#130f40"
                    catenaryColor="blue"
                    hideGrid={false}
                    ref={firstCanvas}
                    canvasHeight={500}
                />
            </div>
            <div ref={componentRef}>
                <h3 className='text-center text-2xl text-primary'>View your saved output</h3>
                <CanvasDraw
                    style={{ width: "100%", marginTop: "5%" }}
                    hideGrid={true}
                    disabled={true}
                    ref={secondCanvas}
                    canvasHeight={400}
                />
            </div>

        </div>
    );
};

export default Paint;