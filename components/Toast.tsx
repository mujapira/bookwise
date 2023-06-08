import React, {useState} from "react";

const Toast: React.FC = () => {
    const [showToast, setShowToast] = useState(false);

    const handleToastClick = () => {
        setShowToast(!showToast);
    };

    return (
        <div className="fixed bottom-5 right-5">
            <button
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
                onClick={handleToastClick}>
                Toggle Toast
            </button>

            {showToast && (
                <div className="p-4 mt-4 bg-white border border-gray-300 rounded-lg shadow-md">
                    <p className="text-gray-800">
                        This is a toast notification.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Toast;
