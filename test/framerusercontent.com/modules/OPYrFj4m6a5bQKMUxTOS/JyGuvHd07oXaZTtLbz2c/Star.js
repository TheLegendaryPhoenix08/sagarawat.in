let Component;
var Star_default = (React) => {
    if (!Component) {
        const StarIcon = React.forwardRef(function StarIcon2({
            title,
            titleId,
            ...props
        }, svgRef) {
            return /* @__PURE__ */ React.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: svgRef,
                "aria-labelledby": titleId
            }, props), title ? /* @__PURE__ */ React.createElement("title", {
                id: titleId
            }, title) : null, /* @__PURE__ */ React.createElement("path", {
                fillRule: "evenodd",
                d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
                clipRule: "evenodd"
            }));
        });
        Component = StarIcon;
    }
    return Component;
};
const __FramerMetadata__ = {
    exports: {
        default: {
            type: "reactComponent",
            slots: [],
            annotations: {
                framerContractVersion: "1"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export {
    __FramerMetadata__,
    Star_default as
    default
};