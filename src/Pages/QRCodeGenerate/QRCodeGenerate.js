import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerate = () => {
    const [url, setUrl] = useState("");

    const qrRef = useRef();

    const downloadQRCode = (e) => {
        e.preventDefault();
        let canvas = qrRef.current.querySelector("canvas");
        let image = canvas.toDataURL("image/png");
        let anchor = document.createElement("a");
        anchor.href = image;
        anchor.download = `qr-code.png`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        setUrl("");
    };

    const qrCodeEncoder = (e) => {
        setUrl(e.target.value);
    };

    const qrcode = (
        <QRCodeCanvas
            id="qrCode"
            value={url}
            size={180}
            bgColor={"#f8f9fa"}
            fgColor={"#023e8a"}
            level={"H"}
        />
    );

    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse shadow-lg lg:px-14 lg:py-10" style={{ borderRadius: "15px" }}>
                <div>
                    <img className="w-1/4 mx-auto" src="https://i.ibb.co/wBFvz6y/hexatech-logo.png" alt="" />
                    <h2 className="text-2xl font-serif text-blue-900 font-bold">QR CODE GENERATOR</h2>
                    <input
                        type="text"
                        value={url}
                        onChange={qrCodeEncoder}
                        placeholder="https://hexa-tech.web.app/"
                    />
                </div>
                <div class="divider lg:divider-horizontal"></div>
                <form onSubmit={downloadQRCode}>
                    <div ref={qrRef}>{qrcode}</div>
                    <button className="w-full mt-2" type="submit"
                        disabled={!url}>
                        Download QR code
                    </button>
                </form>
            </div>
        </div>
    );
};

export default QRCodeGenerate;