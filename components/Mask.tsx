interface MaskProps {
    isNavActive: boolean;
    closeAll: () => void;
    isAsideActive: boolean;
}

export default function Mask({
    isNavActive,
    isAsideActive,
    closeAll,
}: MaskProps) {
    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-1 ${
                isNavActive || isAsideActive
                    ? "pointer-events-auto flex"
                    : "pointer-events-none hidden"
            }`}
            onClick={closeAll}></div>
    );
}
