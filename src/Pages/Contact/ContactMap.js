import React from "react";

function ContactMap() {
    return (
        <div>
            <section className="text-gray-600 bg-white body-font">
                <div className="container px-5 py-24 w-full mx-auto">
                    <div className="flex flex-col justify-center mx-auto text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                            OUR LOCATION
                        </h1>
                    </div>
                    <div className="flex justify-center w-full h-[100vh]">
                        <iframe
                            title="Hexa tech Address"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2582.845412152747!2d-75.60436964069062!3d39.660107706793816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c703f3cdadbfdb%3A0x80d20252268fc006!2s245%20Quigley%20Blvd%20ste%20k%2C%20New%20Castle%2C%20DE%2019720%2C%20USA!5e0!3m2!1sen!2sbd!4v1661687126692!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactMap;