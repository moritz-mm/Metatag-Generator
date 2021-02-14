export const googleTitleFont = "normal 20px arial, sans-serif";
export const googleDescriptionFont = "normal 13px arial, sans-serif";

export function measureTextWidth(text: string, font: string): number {
    if (typeof document !== 'undefined') {
        const canvas = (document.getElementById("canvasId") || document.createElement("canvas")) as HTMLCanvasElement;
        canvas.setAttribute("id", "canvasId");
        const context = canvas.getContext("2d");
        let metrics = -1;
        if (context !== null) {
            context.font = font;
            metrics = context.measureText(text).width;
        }
        return Math.round(metrics);
    }
    return -1;
}