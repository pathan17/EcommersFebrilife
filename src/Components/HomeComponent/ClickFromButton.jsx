import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";

const ClickFromButton = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!name) newErrors.name = "Name is required.";
        if (!message) newErrors.message = "Message is required.";
        if (!phone) newErrors.phone = "Phone number is required.";
        else if (!/^\d+$/.test(phone)) newErrors.phone = "Phone number must be digits only.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        } else {
            // Handle successful submission (e.g., send data to an API)
            console.log({ name, message, phone });
            // Reset form and close it
            setName('');
            setMessage('');
            setPhone('');
            setIsFormVisible(false);
            setErrors({});
        }
    };

    return (
        <div className=" gap-5 top-0 relative ">

            {
                isFormVisible && (
                    <div className="div z-[999]"> 
                        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-[100%]">
                            <div onClick={() => setIsFormVisible(!isFormVisible)} className="close ml-[230px] mt-[-15px] text-blue-500"><FaAngleDown className="text-[30px]" /></div>
                            <div className="text-center">
                                <h1 className="text-2xl font-bold">FabriLife</h1>
                                <p>Customer Support Desk</p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`border border-gray-300 rounded-md p-2 w-full ${errors.name ? 'border-red-500' : ''}`}
                                    placeholder="Your Name"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className={`border border-gray-300 rounded-md p-2 w-full h-20 ${errors.message ? 'border-red-500' : ''}`}
                                    placeholder="Your Message"
                                />
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="phone">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className={`border border-gray-300 rounded-md p-2 w-full ${errors.phone ? 'border-red-500' : ''}`}
                                    placeholder="Your Phone Number"
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                            </div>
                            <button
                                type="submit"
                                className="bg-slate-400 text-white rounded-md p-2 w-full hover:bg-blue-700 transition"
                            >
                                CHAT WITH US
                            </button>
                        </form>
                    </div>

                )
            }

            <div className="div ml-[200px] mt-[500px]">
                <button
                    onClick={() => setIsFormVisible(!isFormVisible)}
                    className="flex justify-center items-center bg-blue-500 text-white rounded-full h-[50px] w-[50px] mb-4 transition"
                >
                    {
                        isFormVisible ?
                            <FaAngleDown className="text-[22px]" />
                            :
                            <FaBook className="text-[22px]" />
                    }

                </button>
            </div>
        </div>
    );
};

export default ClickFromButton;
