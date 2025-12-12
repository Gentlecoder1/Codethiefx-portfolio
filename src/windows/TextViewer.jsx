import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window"

const TextViewer = () => {

    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if(!data) return null;

    const { name, image, subtitle, description } = data;

  return (
    <>
        <div id='window-header'>
            <WindowControls target="txtfile" />
        </div>

        <div className="p-4 space-y-6 bg-white max-h-[80vh] overflow-y-auto">
            {image ? (
                <div className="w-full">
                    <img src={image} alt={name} className="w-full h-auto rounded" />
                </div>
            ) : null}

            {subtitle ?
                <h2 className="text-lg font-semibold">
                    {subtitle}
                </h2>
            : null}

            {Array.isArray(description) && description.length > 0 ? (
                <div className="space-y-2">
                    {description.map((para, index) => (
                        <p 
                            key={index} className="leading-relaxed text-base"
                        >
                            {para}
                        </p>
                    ))}
                </div>
            ) : null}
        </div>
    </>
  );
};

const TextWindow = WindowWrapper(TextViewer, 'txtfile')

export default TextWindow;