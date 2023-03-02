namespace Ports {
    export const ports = {
        groups: {
            in: {
                position: "top",
                markup: [
                    {
                        tagName: 'circle',
                        selector: 'circle',
                        className: 'port-in'
                    }
                ],
                attrs: {
                    circle: {
                        r: 8,
                        magnet: true,
                        fill: "#c8c8c8",
                        style: {
                            visibility: "hidden",
                        },
                    },
                },
            },
            out: {
                position: "bottom",
                markup: [
                    {
                        tagName: 'circle',
                        selector: 'circle',
                        className: 'port-out'
                    }
                ],
                attrs: {
                    circle: {
                        r: 8,
                        magnet: true,
                        fill: "#c8c8c8",
                        style: {
                            visibility: "hidden",
                        },
                    },
                },
            },
        },
        items: [
            {
                id: "in-port",
                group: "in",
            },
            {
                id: "out-port",
                group: "out",
            },
        ],
    };

    export function toggleVisibility(ports, show: boolean) {
        ports.forEach((port) => (port.style.visibility = show ? "visible" : "hidden"));
    }
}
